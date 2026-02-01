#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
中文引号修复脚本
将JavaScript文件中的中文引号替换为转义的英文引号
使用方法: python3 fix-chinese-quotes.py [filename]
"""

import sys
import re
import shutil
from datetime import datetime

def fix_chinese_quotes(filename):
    """修复文件中的中文引号"""
    # 创建备份
    backup_filename = f"{filename}.backup_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
    shutil.copy2(filename, backup_filename)
    print(f"✅ 已创建备份文件: {backup_filename}")
    
    # 读取文件
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"❌ 文件 {filename} 不存在")
        return False
    except Exception as e:
        print(f"❌ 读取文件 {filename} 时出错: {e}")
        return False
    
    # 统计替换数量
    replacements = {
        '"': 0,  # 中文左双引号 → \"
        '"': 0,  # 中文右双引号 → \"
        ''': 0,  # 中文左单引号 → \'
        ''': 0   # 中文右单引号 → \'
    }
    
    # 只在content字段的值中进行替换
    # 匹配模式：content: "..." 或 content: '...'
    # 我们需要更精确地匹配，只在字符串值内替换
    
    # 方法：找到所有content字段，然后在其值中进行替换
    def replace_in_content(match):
        """在content字段的值中替换中文引号"""
        prefix = match.group(1)  # content: "
        quote_char = match.group(2)  # " 或 '
        content_value = match.group(3)  # 内容
        
        # 统计并替换中文引号
        original_content = content_value
        content_value = content_value.replace('"', '\\"')  # 中文左双引号
        content_value = content_value.replace('"', '\\"')  # 中文右双引号
        content_value = content_value.replace(''', "\\'")  # 中文左单引号
        content_value = content_value.replace(''', "\\'")  # 中文右单引号
        
        # 统计替换数量
        if original_content != content_value:
            replacements['"'] += original_content.count('"')
            replacements['"'] += original_content.count('"')
            replacements[''''] += original_content.count(''')
            replacements[''''] += original_content.count(''')
        
        return prefix + quote_char + content_value + quote_char
    
    # 匹配 content: "..." 或 content: '...' 模式
    # 需要处理多行字符串和转义字符
    pattern = r'(content:\s*)(["\'])((?:(?:\\.|(?!\2).))*?)(\2)'
    
    # 更简单的方法：直接在整个文件中替换，但只在字符串内
    # 由于JavaScript字符串可能跨行，我们需要更复杂的处理
    
    # 最简单可靠的方法：逐行处理，只处理包含content:的行
    lines = content.split('\n')
    fixed_lines = []
    total_replacements = 0
    
    for i, line in enumerate(lines):
        original_line = line
        # 只处理包含content:的行
        if 'content:' in line:
            # 找到content:后面的字符串值部分
            # 匹配 content: "..." 或 content: '...'
            # 需要处理字符串中的转义和嵌套引号
            
            # 更精确的匹配：找到content:后的引号开始位置
            content_match = re.search(r'content:\s*(["\'])(.*?)(\1)', line, re.DOTALL)
            if content_match:
                quote_char = content_match.group(1)
                string_value = content_match.group(2)
                
                # 在字符串值中替换中文引号
                original_string = string_value
                string_value = string_value.replace('"', '\\"')
                string_value = string_value.replace('"', '\\"')
                string_value = string_value.replace(''', "\\'")
                string_value = string_value.replace(''', "\\'")
                
                # 统计
                if original_string != string_value:
                    replacements['"'] += original_string.count('"')
                    replacements['"'] += original_string.count('"')
                    replacements[''''] += original_string.count(''')
                    replacements[''''] += original_string.count(''')
                    total_replacements += (original_string.count('"') + 
                                         original_string.count('"') + 
                                         original_string.count(''') + 
                                         original_string.count('''))
                
                # 重建行
                line = line[:content_match.start()] + f'content: {quote_char}{string_value}{quote_char}' + line[content_match.end():]
        
        fixed_lines.append(line)
    
    # 如果没有替换，说明可能匹配模式有问题，尝试更简单的方法
    if total_replacements == 0:
        print("⚠️  使用备用替换方法...")
        # 直接在content字段的值中替换（更激进的方法）
        for i, line in enumerate(fixed_lines):
            if 'content:' in line and ('"' in line or '"' in line or ''' in line or ''' in line):
                original_line = line
                # 在引号内的内容中替换
                # 找到content:后的第一个引号到匹配的结束引号
                match = re.search(r'(content:\s*["\'])(.*?)(["\'])', line)
                if match:
                    prefix = match.group(1)
                    content_part = match.group(2)
                    suffix = match.group(3)
                    
                    # 替换中文引号
                    original_content = content_part
                    content_part = content_part.replace('"', '\\"')
                    content_part = content_part.replace('"', '\\"')
                    content_part = content_part.replace(''', "\\'")
                    content_part = content_part.replace(''', "\\'")
                    
                    if original_content != content_part:
                        replacements['"'] += original_content.count('"')
                        replacements['"'] += original_content.count('"')
                        replacements[''''] += original_content.count(''')
                        replacements[''''] += original_content.count(''')
                        total_replacements += (original_content.count('"') + 
                                             original_content.count('"') + 
                                             original_content.count(''') + 
                                             original_content.count('''))
                    
                    fixed_lines[i] = prefix + content_part + suffix
    
    # 如果还是没有替换，使用最简单的方法：直接替换所有中文引号
    if total_replacements == 0:
        print("⚠️  使用直接替换方法...")
        for i, line in enumerate(fixed_lines):
            if 'content:' in line:
                original_line = line
                # 直接替换，但需要小心处理
                # 只在content:后的字符串值中替换
                parts = line.split('content:', 1)
                if len(parts) == 2:
                    prefix = parts[0] + 'content:'
                    rest = parts[1]
                    
                    # 找到字符串的开始引号
                    quote_match = re.match(r'\s*(["\'])(.*)', rest)
                    if quote_match:
                        quote_char = quote_match.group(1)
                        string_content = quote_match.group(2)
                        
                        # 找到匹配的结束引号（考虑转义）
                        # 简单方法：找到最后一个匹配的引号
                        end_quote_pos = -1
                        for j in range(len(string_content) - 1, -1, -1):
                            if string_content[j] == quote_char:
                                # 检查前面是否有转义符
                                if j == 0 or string_content[j-1] != '\\':
                                    end_quote_pos = j
                                    break
                        
                        if end_quote_pos > 0:
                            string_value = string_content[:end_quote_pos]
                            suffix = string_content[end_quote_pos:]
                            
                            # 替换中文引号
                            original_value = string_value
                            string_value = string_value.replace('"', '\\"')
                            string_value = string_value.replace('"', '\\"')
                            string_value = string_value.replace(''', "\\'")
                            string_value = string_value.replace(''', "\\'")
                            
                            if original_value != string_value:
                                replacements['"'] += original_value.count('"')
                                replacements['"'] += original_value.count('"')
                                replacements[''''] += original_value.count(''')
                                replacements[''''] += original_value.count(''')
                                total_replacements += (original_value.count('"') + 
                                                     original_value.count('"') + 
                                                     original_value.count(''') + 
                                                     original_value.count('''))
                            
                            fixed_lines[i] = prefix + quote_char + string_value + suffix
    
    # 写入修复后的内容
    fixed_content = '\n'.join(fixed_lines)
    
    # 如果还是没有替换，尝试最简单的方法：在整个文件中替换（但只在字符串内）
    if total_replacements == 0:
        print("⚠️  尝试全局替换方法（仅限content字段）...")
        # 使用正则表达式匹配content字段的完整值
        def replace_quotes_in_content(match):
            full_match = match.group(0)
            # 在匹配的内容中替换中文引号
            fixed = full_match.replace('"', '\\"')
            fixed = fixed.replace('"', '\\"')
            fixed = fixed.replace(''', "\\'")
            fixed = fixed.replace(''', "\\'")
            if fixed != full_match:
                replacements['"'] += full_match.count('"')
                replacements['"'] += full_match.count('"')
                replacements[''''] += full_match.count(''')
                replacements[''''] += full_match.count(''')
            return fixed
        
        # 匹配content: "..." 模式（包括多行）
        pattern = r'content:\s*["\'].*?["\']'
        fixed_content = re.sub(pattern, replace_quotes_in_content, content, flags=re.DOTALL)
        
        # 重新计算替换数量
        total_replacements = replacements['"'] + replacements['"'] + replacements[''''] + replacements[''']
    
    # 如果仍然没有替换，使用最直接的方法
    if total_replacements == 0:
        print("⚠️  使用最终方法：直接替换所有中文引号...")
        original_content = content
        fixed_content = content.replace('"', '\\"')
        fixed_content = fixed_content.replace('"', '\\"')
        fixed_content = fixed_content.replace(''', "\\'")
        fixed_content = fixed_content.replace(''', "\\'")
        
        # 统计（简单计数）
        total_replacements = (original_content.count('"') + 
                            original_content.count('"') + 
                            original_content.count(''') + 
                            original_content.count('''))
        
        if total_replacements > 0:
            replacements['"'] = original_content.count('"')
            replacements['"'] = original_content.count('"')
            replacements[''''] = original_content.count(''')
            replacements[''''] = original_content.count(''')
    
    # 写入文件
    try:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
    except Exception as e:
        print(f"❌ 写入文件 {filename} 时出错: {e}")
        return False
    
    # 输出统计
    print(f"\n📊 替换统计:")
    print(f"   中文左双引号 \" → \\\": {replacements['"']} 处")
    print(f"   中文右双引号 \" → \\\": {replacements['"']} 处")
    print(f"   中文左单引号 ' → \\': {replacements['''']} 处")
    print(f"   中文右单引号 ' → \\': {replacements['''']} 处")
    print(f"   总计: {total_replacements} 处")
    
    return total_replacements > 0

def main():
    if len(sys.argv) > 1:
        filenames = sys.argv[1:]
    else:
        filenames = ['wisdom_capsules.js']
    
    total_fixed = 0
    for filename in filenames:
        print(f"\n🔧 开始修复文件: {filename}")
        if fix_chinese_quotes(filename):
            total_fixed += 1
            print(f"✅ {filename} 修复完成")
        else:
            print(f"⚠️  {filename} 未发现需要修复的内容或修复失败")
    
    print(f"\n✅ 修复完成！共处理 {len(filenames)} 个文件，成功修复 {total_fixed} 个文件")

if __name__ == '__main__':
    main()









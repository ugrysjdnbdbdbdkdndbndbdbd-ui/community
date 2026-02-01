#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
中文引号修复脚本 - 最终版本
批量修复JavaScript文件中的中文引号，将其转义为英文引号
"""

import re
import sys

def fix_chinese_quotes_in_content(content):
    """修复content字段中的中文引号"""
    # 中文引号映射到转义的英文引号
    replacements = {
        '"': '\\"',  # 中文左双引号 -> 转义的英文双引号
        '"': '\\"',  # 中文右双引号 -> 转义的英文双引号
        ''': "\\'",  # 中文左单引号 -> 转义的英文单引号
        ''': "\\'",  # 中文右单引号 -> 转义的英文单引号
    }
    
    # 只处理content字段中的引号
    # 匹配 content: "..." 或 content: '...' 格式
    def replace_in_string(match):
        full_match = match.group(0)
        quote_char = match.group(1)  # 获取引号字符（"或'）
        content_text = match.group(2)  # 获取内容
        
        # 替换内容中的中文引号
        for chinese_quote, escaped_quote in replacements.items():
            content_text = content_text.replace(chinese_quote, escaped_quote)
        
        # 返回修复后的字符串
        return f'content: {quote_char}{content_text}{quote_char}'
    
    # 匹配 content: "..." 或 content: '...' 格式（包括多行）
    pattern = r'content:\s*(["\'])(.*?)\1'
    
    # 使用re.DOTALL使.匹配换行符，处理多行内容
    fixed_content = re.sub(pattern, replace_in_string, content, flags=re.DOTALL)
    
    return fixed_content

def fix_file(filename):
    """修复文件中的中文引号"""
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"❌ 文件 {filename} 不存在")
        return False
    except Exception as e:
        print(f"❌ 读取文件 {filename} 时出错: {e}")
        return False
    
    # 备份原文件
    backup_filename = filename + '.backup'
    try:
        with open(backup_filename, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ 已创建备份: {backup_filename}")
    except Exception as e:
        print(f"⚠️  无法创建备份: {e}")
        return False
    
    # 修复中文引号
    fixed_content = fix_chinese_quotes_in_content(content)
    
    # 检查是否有变化
    if fixed_content == content:
        print(f"ℹ️  {filename}: 未发现需要修复的内容")
        return True
    
    # 写入修复后的内容
    try:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        print(f"✅ {filename}: 修复完成")
        return True
    except Exception as e:
        print(f"❌ 写入文件 {filename} 时出错: {e}")
        return False

def main():
    filenames = ['wisdom_capsules.js']
    
    print("🔧 开始修复中文引号问题...\n")
    
    success_count = 0
    for filename in filenames:
        if fix_file(filename):
            success_count += 1
        print()
    
    print(f"✅ 修复完成: {success_count}/{len(filenames)} 个文件")
    
    if success_count == len(filenames):
        print("\n💡 提示: 请运行 check-chinese-quotes.py 验证修复结果")
        return 0
    else:
        return 1

if __name__ == '__main__':
    sys.exit(main())

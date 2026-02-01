#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
中文引号修复脚本 - 完整版本
修复content字段字符串中的所有中文引号
"""

import sys
import re

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
    backup_filename = filename + '.backup_complete'
    try:
        with open(backup_filename, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ 已创建备份: {backup_filename}")
    except Exception as e:
        print(f"⚠️  无法创建备份: {e}")
        return False
    
    # 统计修复数量
    fixed_count = 0
    
    # 匹配 content: "..." 格式，包括多行内容
    # 使用非贪婪匹配，直到遇到 ", 后面跟着 tags
    pattern = r'(content:\s*")(.*?)(",\s*tags:)'
    
    def replace_quotes(match):
        nonlocal fixed_count
        prefix = match.group(1)  # content: "
        content_text = match.group(2)  # 内容部分
        suffix = match.group(3)  # ", tags:
        
        # 替换内容中的中文引号
        original_text = content_text
        # 中文左双引号 " -> \"
        content_text = content_text.replace('\u201c', '\\"')
        # 中文右双引号 " -> \"
        content_text = content_text.replace('\u201d', '\\"')
        # 中文左单引号 ' -> \'
        content_text = content_text.replace('\u2018', "\\'")
        # 中文右单引号 ' -> \'
        content_text = content_text.replace('\u2019', "\\'")
        
        # 统计修复数量
        fixed_count += sum([
            original_text.count('\u201c'),
            original_text.count('\u201d'),
            original_text.count('\u2018'),
            original_text.count('\u2019')
        ])
        
        return prefix + content_text + suffix
    
    # 执行替换
    fixed_content = re.sub(pattern, replace_quotes, content, flags=re.DOTALL)
    
    # 检查是否有变化
    if fixed_content == content:
        print(f"ℹ️  {filename}: 未发现需要修复的内容")
        return True
    
    # 写入修复后的内容
    try:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        print(f"✅ {filename}: 修复完成，共修复 {fixed_count} 处中文引号")
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
        print("\n💡 提示: 请运行以下命令验证修复结果:")
        print("   python3 check-chinese-quotes.py")
        print("   bash check-js-syntax.sh")
        return 0
    else:
        return 1

if __name__ == '__main__':
    sys.exit(main())

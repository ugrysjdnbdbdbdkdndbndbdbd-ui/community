#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
中文引号修复脚本 - 精确版本
直接替换content字段中的中文引号为转义的英文引号
"""

import sys

def fix_file(filename):
    """修复文件中的中文引号"""
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            lines = f.readlines()
    except FileNotFoundError:
        print(f"❌ 文件 {filename} 不存在")
        return False
    except Exception as e:
        print(f"❌ 读取文件 {filename} 时出错: {e}")
        return False
    
    # 备份原文件
    backup_filename = filename + '.backup_final'
    try:
        with open(backup_filename, 'w', encoding='utf-8') as f:
            f.writelines(lines)
        print(f"✅ 已创建备份: {backup_filename}")
    except Exception as e:
        print(f"⚠️  无法创建备份: {e}")
        return False
    
    # 修复中文引号
    fixed_lines = []
    fixed_count = 0
    
    for i, line in enumerate(lines, 1):
        original_line = line
        # 只处理包含content:的行
        if 'content:' in line:
            # 替换中文引号为转义的英文引号
            # 中文左双引号 " -> \"
            if '\u201c' in line:
                line = line.replace('\u201c', '\\"')
                fixed_count += 1
            # 中文右双引号 " -> \"
            if '\u201d' in line:
                line = line.replace('\u201d', '\\"')
                fixed_count += 1
            # 中文左单引号 ' -> \'
            if '\u2018' in line:
                line = line.replace('\u2018', "\\'")
                fixed_count += 1
            # 中文右单引号 ' -> \'
            if '\u2019' in line:
                line = line.replace('\u2019', "\\'")
                fixed_count += 1
        
        fixed_lines.append(line)
    
    # 检查是否有变化
    if fixed_lines == lines:
        print(f"ℹ️  {filename}: 未发现需要修复的内容")
        return True
    
    # 写入修复后的内容
    try:
        with open(filename, 'w', encoding='utf-8') as f:
            f.writelines(fixed_lines)
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

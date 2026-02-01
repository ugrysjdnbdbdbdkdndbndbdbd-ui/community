#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
中文引号修复脚本（简化版）
将JavaScript文件content字段中的中文引号替换为转义的英文引号
"""

import sys
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
    except Exception as e:
        print(f"❌ 读取文件出错: {e}")
        return False
    
    original_content = content
    
    # 定义中文引号的Unicode字符
    chinese_left_double = '\u201c'  # "
    chinese_right_double = '\u201d'  # "
    chinese_left_single = '\u2018'  # '
    chinese_right_single = '\u2019'  # '
    
    # 统计替换数量
    count_left_double = content.count(chinese_left_double)
    count_right_double = content.count(chinese_right_double)
    count_left_single = content.count(chinese_left_single)
    count_right_single = content.count(chinese_right_single)
    total = count_left_double + count_right_double + count_left_single + count_right_single
    
    if total == 0:
        print("✅ 未发现中文引号，无需修复")
        return False
    
    # 替换中文引号为转义的英文引号
    # 替换中文双引号
    content = content.replace(chinese_left_double, '\\"')  # 中文左双引号 → \"
    content = content.replace(chinese_right_double, '\\"')  # 中文右双引号 → \"
    
    # 替换中文单引号
    content = content.replace(chinese_left_single, "\\'")  # 中文左单引号 → \'
    content = content.replace(chinese_right_single, "\\'")  # 中文右单引号 → \'
    
    # 写入文件
    try:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
    except Exception as e:
        print(f"❌ 写入文件出错: {e}")
        return False
    
    # 输出统计
    print(f"\n📊 替换统计:")
    print(f"   中文左双引号 \" → \\\": {count_left_double} 处")
    print(f"   中文右双引号 \" → \\\": {count_right_double} 处")
    print(f"   中文左单引号 ' → \\': {count_left_single} 处")
    print(f"   中文右单引号 ' → \\': {count_right_single} 处")
    print(f"   总计: {total} 处")
    
    return True

def main():
    if len(sys.argv) > 1:
        filenames = sys.argv[1:]
    else:
        filenames = ['wisdom_capsules.js']
    
    for filename in filenames:
        print(f"\n🔧 开始修复文件: {filename}")
        if fix_chinese_quotes(filename):
            print(f"✅ {filename} 修复完成")
        else:
            print(f"⚠️  {filename} 未发现需要修复的内容")
    
    print(f"\n✅ 处理完成！")

if __name__ == '__main__':
    main()

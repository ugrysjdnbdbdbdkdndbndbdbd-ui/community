#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
中文引号检测脚本
检查JavaScript文件中是否包含未转义的中文引号
使用方法: python3 check-chinese-quotes.py [filename]
"""

import sys

def check_file(filename):
    """检查文件中是否包含未转义的中文引号"""
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            lines = f.readlines()
    except FileNotFoundError:
        print(f"❌ 文件 {filename} 不存在")
        return []
    except Exception as e:
        print(f"❌ 读取文件 {filename} 时出错: {e}")
        return []
    
    issues = []
    # 中文引号的Unicode字符
    chinese_quotes = ['"', '"', ''', ''']
    
    for i, line in enumerate(lines, 1):
        # 只检查content字段的行
        if 'content:' in line:
            # 检查是否包含中文引号
            for quote_char in chinese_quotes:
                if quote_char in line:
                    # 找到包含中文引号的行
                    line_preview = line.strip()[:150] if len(line.strip()) > 150 else line.strip()
                    issues.append({
                        'line': i,
                        'content': line_preview,
                        'char': quote_char
                    })
                    break  # 每行只报告一次
    
    return issues

def main():
    if len(sys.argv) > 1:
        filenames = sys.argv[1:]
    else:
        filenames = ['wisdom_capsules.js', 'community_cases.js']
    
    all_issues = {}
    total_issues = 0
    
    for filename in filenames:
        issues = check_file(filename)
        if issues:
            all_issues[filename] = issues
            total_issues += len(issues)
    
    if total_issues > 0:
        print(f"❌ 发现 {total_issues} 处中文引号问题：\n")
        for filename, issues in all_issues.items():
            print(f"📄 {filename} ({len(issues)} 处):")
            for issue in issues[:10]:  # 只显示前10个
                char_name = {
                    '"': '中文左双引号',
                    '"': '中文右双引号',
                    ''': '中文左单引号',
                    ''': '中文右单引号'
                }.get(issue['char'], issue['char'])
                print(f"  第{issue['line']}行: 包含{char_name} '{issue['char']}'")
                print(f"    {issue['content']}")
            if len(issues) > 10:
                print(f"  ... 还有 {len(issues) - 10} 处未显示")
            print()
        print("⚠️  注意：JavaScript字符串中应使用转义的英文引号（\\\"）而不是中文引号")
        sys.exit(1)
    else:
        print("✅ 所有文件未发现中文引号问题")
        sys.exit(0)

if __name__ == '__main__':
    main()

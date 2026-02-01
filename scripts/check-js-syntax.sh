#!/bin/bash
# JavaScript语法检查脚本
# 使用方法: ./check-js-syntax.sh

echo "🔍 开始检查JavaScript文件语法..."
echo ""

ERRORS=0

# 检查 wisdom_capsules.js
if [ -f "wisdom_capsules.js" ]; then
    if node --check wisdom_capsules.js 2>/dev/null; then
        echo "✅ wisdom_capsules.js 语法正确"
    else
        echo "❌ wisdom_capsules.js 语法错误"
        node --check wisdom_capsules.js
        ERRORS=$((ERRORS + 1))
    fi
else
    echo "⚠️  wisdom_capsules.js 文件不存在"
fi

# 检查 community_cases.js
if [ -f "community_cases.js" ]; then
    if node --check community_cases.js 2>/dev/null; then
        echo "✅ community_cases.js 语法正确"
    else
        echo "❌ community_cases.js 语法错误"
        node --check community_cases.js
        ERRORS=$((ERRORS + 1))
    fi
else
    echo "⚠️  community_cases.js 文件不存在"
fi

echo ""
if [ $ERRORS -eq 0 ]; then
    echo "✅ 所有JavaScript文件语法检查通过"
    exit 0
else
    echo "❌ 发现 $ERRORS 个文件存在语法错误，请修复后再提交"
    exit 1
fi

#!/bin/bash
# 提交前代码检查脚本
# 使用方法: ./pre-commit-check.sh
# 或在git hooks中使用: ln -s ../../pre-commit-check.sh .git/hooks/pre-commit

echo "🔍 开始提交前代码检查..."
echo ""

ERRORS=0
WARNINGS=0

# 1. JavaScript语法检查
echo "1️⃣  检查JavaScript语法..."
if [ -f "check-js-syntax.sh" ]; then
    if bash check-js-syntax.sh > /dev/null 2>&1; then
        echo "   ✅ JavaScript语法检查通过"
    else
        echo "   ❌ JavaScript语法检查失败"
        bash check-js-syntax.sh
        ERRORS=$((ERRORS + 1))
    fi
else
    echo "   ⚠️  语法检查脚本不存在"
    WARNINGS=$((WARNINGS + 1))
fi

echo ""

# 2. 中文引号检查
echo "2️⃣  检查中文引号..."
if [ -f "check-chinese-quotes.py" ]; then
    if python3 check-chinese-quotes.py > /dev/null 2>&1; then
        echo "   ✅ 中文引号检查通过"
    else
        echo "   ⚠️  发现中文引号问题（可能是误报，请手动验证）"
        python3 check-chinese-quotes.py | head -10
        WARNINGS=$((WARNINGS + 1))
        # 中文引号作为警告，不阻止提交
    fi
else
    echo "   ⚠️  中文引号检查脚本不存在"
    WARNINGS=$((WARNINGS + 1))
fi

echo ""

# 3. 文件大小检查（可选）
echo "3️⃣  检查文件大小..."
LARGE_FILES=$(find . -name "*.js" -o -name "*.html" | xargs ls -lh 2>/dev/null | awk '$5+0 > 1000000 {print $5, $9}' | head -5)
if [ -n "$LARGE_FILES" ]; then
    echo "   ⚠️  发现大文件（>1MB）:"
    echo "$LARGE_FILES" | while read line; do
        echo "      $line"
    done
    WARNINGS=$((WARNINGS + 1))
else
    echo "   ✅ 文件大小正常"
fi

echo ""

# 总结
echo "📊 检查总结:"
if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo "   ✅ 所有检查通过，可以提交"
    exit 0
elif [ $ERRORS -eq 0 ]; then
    echo "   ⚠️  有 $WARNINGS 个警告，但可以提交（请尽快修复）"
    exit 0
else
    echo "   ❌ 发现 $ERRORS 个错误，$WARNINGS 个警告"
    echo "   ❌ 请修复错误后再提交"
    exit 1
fi









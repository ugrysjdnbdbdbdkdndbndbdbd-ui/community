#!/bin/bash
# 向后兼容：调用 scripts/check-js-syntax.sh
# 使用方法: ./check-js-syntax.sh 或 bash scripts/check-js-syntax.sh
exec "$(dirname "$0")/scripts/check-js-syntax.sh" "$@"

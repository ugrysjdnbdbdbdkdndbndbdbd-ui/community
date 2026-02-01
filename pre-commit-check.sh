#!/bin/bash
# 向后兼容：调用 scripts/pre-commit-check.sh
# 使用方法: ./pre-commit-check.sh 或 bash scripts/pre-commit-check.sh
exec "$(dirname "$0")/scripts/pre-commit-check.sh" "$@"

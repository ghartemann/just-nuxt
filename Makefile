# Default goal
.DEFAULT_GOAL := help

# ----------------------------------------------------------------------
# 📋 Help Menu
# ----------------------------------------------------------------------
help:
	@echo "╔════════════════════════════════════════════════════════════╗"
	@echo "║                    📋 Available Commands                    ║"
	@echo "╚════════════════════════════════════════════════════════════╝"
	@echo ""
	@echo "  make install       - Install dependencies"
	@echo "  make build         - Build production assets and clear cache"
	@echo "  make release       - Commit, tag and push"
	@echo "  make clean         - Remove node_modules and vendor directories"
	@echo ""

# ----------------------------------------------------------------------
# 📦  Setup & Dependencies
# ----------------------------------------------------------------------

install:
	@echo "📦  Installing dependencies..."
	npm install

# ----------------------------------------------------------------------
# 🚀  Development & Build
# ----------------------------------------------------------------------

build:
	@echo "🏗️  Building production assets..."
	npm run build
release:
	@echo "🏗️  Commit, tag and push..."
	npm run release

# ----------------------------------------------------------------------
# 🧹  Cache & Maintenance
# ----------------------------------------------------------------------

clean:
	@echo "🧹  Removing node_modules and lock files..."
	rm -rf node_modules/
	rm -f package-lock.json

# ----------------------------------------------------------------------
# ⚙️  Internal Configurations
# ----------------------------------------------------------------------

.PHONY: help install build release clean

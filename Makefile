.PHONY: help install start build serve clean

# Default target
help:
	@echo "WSO2 Agent Manager Documentation - Available Commands"
	@echo ""
	@echo "Development:"
	@echo "  make install          - Install dependencies"
	@echo "  make start            - Start development server"
	@echo "  make build            - Build static site"
	@echo "  make serve            - Serve built site locally"
	@echo "  make clean            - Clean build artifacts"

# Install dependencies
install:
	npm install

# Start development server
start:
	npm run start

# Build the site
build:
	npm run build

# Serve the built site
serve:
	npm run serve

# Clean build artifacts
clean:
	rm -rf build .docusaurus

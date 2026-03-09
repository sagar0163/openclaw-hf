---
title: OpenClaw Web Interface
emoji: 🤖
colorFrom: purple
colorTo: blue
sdk: docker
app_port: 7860
python_version: "3.11"
---

# OpenClaw Web Interface

This is a web interface for OpenClaw - an AI assistant.

## Quick Start

```bash
# Run locally
docker build -t openclaw .
docker run -p 7860:7860 openclaw
```

## Environment Variables

Set these in Space settings:
- `OPENCLAW_API_URL` - URL to OpenClaw API (if separate)
- `API_KEY` - Your API key

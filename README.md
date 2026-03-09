---
title: OpenClaw Web UI
emoji: 🤖
colorFrom: purple
colorTo: cyan
sdk: docker
app_port: 7860
python_version: "3.11"
---

# 🤖 OpenClaw Web UI

A beautiful web interface for OpenClaw AI Assistant, optimized for Hugging Face Spaces.

## Quick Deploy

Click below to deploy:

[![Deploy to HuggingFace](https://img.shields.io/badge/Deploy%20to%20HuggingFace-%FCA121?style=for-the-badge&logo=huggingface)](https://huggingface.co/spaces/sagar0123/openclaw-webui)

## Features

- 💬 Modern dark-themed chat interface
- 📱 Responsive design
- ⚡ Real-time messaging
- 🎨 Beautiful purple/cyan gradient theme

## Deployment

### Option 1: One-Click
1. Go to: https://huggingface.co/spaces/sagar0123/openclaw-webui
2. Click "Duplicate this Space"
3. Select Docker SDK
4. Click Create

### Option 2: From GitHub
1. Go to: https://huggingface.co/spaces/new
2. Select Docker SDK
3. Import from: `https://github.com/sagar0163/openclaw-hf`

## Your URL Will Be

```
https://huggingface.co/spaces/sagar0123/openclaw-webui
```

## Environment Variables

Set in Space Settings:
- `PORT` - Server port (default: 7860)

## Local Development

```bash
# Build
docker build -t openclaw .

# Run
docker run -p 7860:7860 openclaw
```

## Tech Stack

- Node.js 20
- Express.js
- Vanilla JS (no framework)

---
*Built with ❤️ using OpenClaw*

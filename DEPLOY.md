# 🚀 Quick Deploy to Hugging Face

## Option 1: One-Click Deploy (Recommended)

Click this button to deploy:

[![Deploy to Hugging Face](https://huggingface.co/datasets/huggingface/badges/resolve/main/deploy-to-spaces-lg.svg)](https://huggingface.co/spaces/create)

Then select:
1. **SDK**: Docker
2. **Import from GitHub**: `sagar0163/openclaw-hf`

---

## Option 2: Using GitHub (Easiest)

1. Go to: https://huggingface.co/spaces/new
2. Select **Docker** SDK
3. Choose **"Import from GitHub"**
4. Search for: `sagar0163/openclaw-hf`
5. Click **Create Space**

---

## Option 3: Using CLI

```bash
# Install HF CLI
pip install huggingface-hub

# Login
huggingface-cli login

# Create space
huggingface-cli space create openclaw-webui \
  --repo-id sagar0163/openclaw-webui \
  --sdk docker \
  --emoji 🤖
```

---

## What's Deployed

| Feature | Status |
|---------|--------|
| Web Chat UI | ✅ Dark theme |
| Chat History | ✅ In-memory |
| Docker | ✅ Ready for HF |
| Port | 7860 |

---

## After Deploy

Your OpenClaw Web UI will be live at:
```
https://huggingface.co/spaces/{your-username}/openclaw-webui
```

Example: https://huggingface.co/spaces/sagar0163/openclaw-webui

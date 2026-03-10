FROM node:20-slim

WORKDIR /app

# Install dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install OpenClaw globally
RUN npm install -g openclaw

# Create required directories
RUN mkdir -p ~/.openclaw/workspace ~/.openclaw/logs ~/.openclaw/memory

# Copy config
COPY openclaw-config.json ~/.openclaw/openclaw.json

# Expose port
EXPOSE 7860

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
    CMD curl -f http://localhost:7860/health || exit 1

# Start OpenClaw gateway
CMD ["openclaw", "gateway", "--port", "7860"]

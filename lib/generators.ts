import { WizardConfig } from "./wizard-context";

export function generateConfigYAML(config: WizardConfig): string {
  const yaml: string[] = [];

  // Meta
  yaml.push(`meta:`);
  yaml.push(`  generated: "${new Date().toISOString()}"`);
  yaml.push(`  version: "2026.2"`);
  yaml.push(``);

  // Providers
  if (Object.keys(config.providers).length > 0) {
    yaml.push(`providers:`);
    
    if (config.providers.anthropic) {
      yaml.push(`  - provider: anthropic`);
      if (config.providers.anthropic.sessionToken) {
        yaml.push(`    sessionToken: \${ANTHROPIC_SESSION_TOKEN}`);
      } else if (config.providers.anthropic.apiKey) {
        yaml.push(`    apiKey: \${ANTHROPIC_API_KEY}`);
      }
    }
    
    if (config.providers.openai) {
      yaml.push(`  - provider: openai`);
      yaml.push(`    apiKey: \${OPENAI_API_KEY}`);
    }
    
    if (config.providers.google) {
      yaml.push(`  - provider: google`);
      yaml.push(`    apiKey: \${GOOGLE_API_KEY}`);
    }
    
    if (config.providers.ollama) {
      yaml.push(`  - provider: ollama`);
      yaml.push(`    baseUrl: http://localhost:11434`);
    }
    
    yaml.push(``);
  }

  // Channels
  if (Object.keys(config.channels).length > 0) {
    yaml.push(`channels:`);
    
    if (config.channels.telegram) {
      yaml.push(`  - channel: telegram`);
      yaml.push(`    token: \${TELEGRAM_BOT_TOKEN}`);
      yaml.push(`    dmPolicy: ${config.security.dmPolicy}`);
      if (config.security.allowlist.length > 0) {
        yaml.push(`    allowlist:`);
        config.security.allowlist.forEach((user) => {
          yaml.push(`      - "${user}"`);
        });
      }
    }
    
    if (config.channels.discord) {
      yaml.push(`  - channel: discord`);
      yaml.push(`    token: \${DISCORD_BOT_TOKEN}`);
    }
    
    if (config.channels.whatsapp?.enabled) {
      yaml.push(`  - channel: whatsapp`);
      yaml.push(`    # Will configure via QR code on first run`);
    }
    
    if (config.channels.signal?.enabled) {
      yaml.push(`  - channel: signal`);
      yaml.push(`    # Will configure via linking on first run`);
    }
    
    yaml.push(``);
  }

  // Agent personality
  yaml.push(`agent:`);
  yaml.push(`  name: "${config.personality.name}"`);
  yaml.push(`  emoji: "${config.personality.emoji}"`);
  yaml.push(`  vibe: "${config.personality.vibe}"`);
  yaml.push(``);

  // Skills
  if (config.skills.length > 0) {
    yaml.push(`skills:`);
    config.skills.forEach((skill) => {
      yaml.push(`  - ${skill}`);
    });
  }

  return yaml.join("\n");
}

export function generateEnvFile(config: WizardConfig): string {
  const lines: string[] = [];
  
  lines.push(`# OpenClaw Environment Variables`);
  lines.push(`# Generated: ${new Date().toISOString()}`);
  lines.push(``);

  // Providers
  if (config.providers.anthropic?.sessionToken) {
    lines.push(`# Anthropic Claude (Session Token)`);
    lines.push(`ANTHROPIC_SESSION_TOKEN=your-session-token-here`);
    lines.push(``);
  } else if (config.providers.anthropic?.apiKey) {
    lines.push(`# Anthropic Claude (API Key)`);
    lines.push(`ANTHROPIC_API_KEY=sk-ant-api-...`);
    lines.push(``);
  }
  
  if (config.providers.openai) {
    lines.push(`# OpenAI GPT`);
    lines.push(`OPENAI_API_KEY=sk-...`);
    lines.push(``);
  }
  
  if (config.providers.google) {
    lines.push(`# Google Gemini`);
    lines.push(`GOOGLE_API_KEY=AIza...`);
    lines.push(``);
  }

  // Channels
  if (config.channels.telegram) {
    lines.push(`# Telegram Bot`);
    lines.push(`TELEGRAM_BOT_TOKEN=123456:ABC-DEF...`);
    lines.push(``);
  }
  
  if (config.channels.discord) {
    lines.push(`# Discord Bot`);
    lines.push(`DISCORD_BOT_TOKEN=...`);
    lines.push(``);
  }

  return lines.join("\n");
}

export function generateInstallScript(): string {
  return `#!/bin/bash
# OpenClaw Installation Script v2
# Generated: ${new Date().toISOString()}

set -e

OS="$(uname -s)"
echo "🖥️  Detected OS: $OS"

if ! command -v npm >/dev/null 2>&1; then
  echo "❌ npm not found. Install Node.js first: https://nodejs.org"
  exit 1
fi

echo "🚀 Installing OpenClaw..."
npm install -g openclaw

mkdir -p ~/.openclaw

echo "📝 Copying config files..."
cp openclaw.yaml ~/.openclaw/openclaw.yaml
cp .env ~/.openclaw/.env

# Basic interactive prompts for missing env values
if grep -q "your-session-token-here\|sk-...\|AIza...\|123456:ABC-DEF" ~/.openclaw/.env 2>/dev/null; then
  echo "\n⚠️  Se detectaron placeholders en ~/.openclaw/.env"
  read -p "¿Quieres editar .env ahora? (y/N): " EDIT_ENV
  if [[ "$EDIT_ENV" =~ ^[Yy]$ ]]; then
    \${EDITOR:-nano} ~/.openclaw/.env
  fi
fi

echo "🔌 Starting gateway..."
openclaw gateway start || true

DASH_URL="http://localhost:18789"
echo "🌐 Opening dashboard: $DASH_URL"
if [[ "$OS" == "Darwin" ]]; then
  open "$DASH_URL" || true
elif command -v xdg-open >/dev/null 2>&1; then
  xdg-open "$DASH_URL" || true
fi

echo "✅ Installation complete!"
echo "Dashboard: $DASH_URL"
`;
}

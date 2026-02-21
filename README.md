# OpenClaw Configurator 🤖

WordPress-style wizard to configure your OpenClaw instance. No code, no complexity—just a guided 7-step setup.

![OpenClaw Configurator](https://img.shields.io/badge/status-beta-yellow)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🎯 What is this?

Setting up OpenClaw manually takes 1-3 hours and requires reading extensive documentation. This wizard reduces that to **under 10 minutes** with a visual, step-by-step interface.

**Input:** Answer 7 simple questions  
**Output:** `openclaw.yaml` + `.env` + `install.sh` ready to deploy

## ✨ Features

- **7-Step Wizard:** Providers → Channels → Security → Skills → Personality → Review → Download
- **Live Preview:** See your configuration before downloading
- **Secure by Default:** Privacy-first with allowlist recommendations
- **Multiple Providers:** Anthropic, OpenAI, Google, Ollama support
- **Channel Support:** Telegram, WhatsApp, Discord, Signal
- **Skill Selection:** Pre-configured popular skills (GitHub, Email, Weather, etc.)

## 🚀 Quick Start

### Development

```bash
# Clone the repo
git clone https://github.com/jotajota1302/openclaw-configurator.git
cd openclaw-configurator

# Install dependencies
npm install

# Run dev server
npm run dev
```

Visit http://localhost:3000

### Production

```bash
# Build
npm run build

# Start production server
npm start
```

## 📸 Screenshots

### Home Page
Landing page with feature overview and CTA to start wizard.

### Step 1: Providers
Select and configure your LLM provider (Claude, GPT, Gemini, Ollama).

### Step 7: Download
Download your complete configuration files with one click.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State:** React Context API
- **Output:** YAML + ENV generation

## 📦 Generated Files

The wizard generates 3 files:

### 1. `openclaw.yaml`
Complete OpenClaw configuration with providers, channels, security, and skills.

### 2. `.env`
Environment variables template for API keys and tokens.

### 3. `install.sh`
Automated installation script.

## 🔧 Configuration Steps

1. **Providers** - Choose your LLM (Claude, GPT, Gemini, or local Ollama)
2. **Channels** - Connect messaging platforms (Telegram, Discord, WhatsApp, Signal)
3. **Security** - Set DM policy and allowlist for privacy
4. **Skills** - Select capabilities (GitHub, Email, Weather, etc.)
5. **Personality** - Customize name, emoji, and vibe
6. **Review** - Verify all settings
7. **Download** - Get your config files

## 🎯 Roadmap

### Sprint 1 ✅ (Current)
- [x] Basic wizard flow
- [x] Provider configuration
- [x] Channel setup
- [x] Security & allowlist
- [x] Skill selection
- [x] Personality customization
- [x] File generation (YAML + ENV + script)

### Sprint 2 (Next)
- [ ] Advanced provider options (fallbacks, rate limits)
- [ ] Custom skill upload
- [ ] Template library (pre-configured setups)
- [ ] Config validation

### Sprint 3
- [ ] 1-click deploy to Railway/Render
- [ ] Health check & monitoring setup
- [ ] Stripe billing integration

### Sprint 4
- [ ] Dashboard to manage running instances
- [ ] Real-time config editing
- [ ] Analytics & usage stats

## 🤝 Contributing

Contributions welcome! This is part of the OpenClaw ecosystem.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details.

## 🔗 Links

- **OpenClaw Docs:** https://docs.openclaw.ai
- **ClawHub (Skills):** https://clawhub.com
- **Discord Community:** https://discord.gg/clawd
- **GitHub:** https://github.com/openclaw/openclaw

## 🙏 Acknowledgments

Part of the OpenClaw ecosystem. Built with ❤️ by the OpenClaw community.

---

**Status:** Beta (Sprint 1 complete)  
**Version:** 0.1.0  
**Last Updated:** 2026-02-21

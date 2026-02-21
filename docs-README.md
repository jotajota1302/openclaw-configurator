# OpenClaw Configurator

**Repo:** https://github.com/jotajota1302/openclaw-configurator

## Concepto

Asistente de configuración web tipo WordPress para instancias de OpenClaw.

**Problema:** La configuración de OpenClaw es potente pero compleja:
- JSON manual (config.yaml → JSON)
- Variables de entorno
- Autenticación multi-provider
- Channels (WhatsApp, Telegram, Discord, Signal...)
- Plugins, skills, cron jobs
- Seguridad (tokens, sandboxing, allowlists)

**Solución:** Wizard paso a paso que genera config.yaml + .env listos para usar.

## Target

- **Primario:** Usuarios no-técnicos que quieren su propio agente sin tocar terminal
- **Secundario:** Devs que quieren setup rápido sin leer docs completas

## Stack Propuesto

- **Frontend:** Next.js 14 + TypeScript + Tailwind + shadcn/ui
- **Backend:** API Routes de Next.js (stateless)
- **Output:** config.yaml + .env descargables + script de instalación
- **Deploy:** Vercel (gratis, escalable)

## Features Core (MVP)

### 1. Wizard paso a paso (5-7 pasos)
1. **Bienvenida** — ¿Primera vez? ¿Ya tienes OpenClaw instalado?
2. **Provider LLM** — Claude / OpenAI / Gemini / Ollama (local)
   - Input: API key o session token
   - Auto-validación
3. **Channels** — WhatsApp / Telegram / Discord / Signal
   - QR codes, webhooks, setup guiado
4. **Seguridad** — Modo sandbox / Token gateway / Allowlists
   - Perfiles: "Máxima seguridad" / "Desarrollo local" / "Producción"
5. **Skills** — Selección de skills pre-curados (weather, github, email...)
   - Checkbox list con descripciones
6. **Personalidad** — Generador de SOUL.md con templates
   - "Profesional" / "Casual" / "Custom"
7. **Review + Download** — Vista previa config + botón de descarga
   - Config.yaml
   - .env
   - install.sh (script automático)

### 2. Templates pre-configurados
- **Personal Assistant** (WhatsApp + Claude + weather + calendar)
- **Developer Companion** (GitHub + Codex + coding skills)
- **Business Bot** (Email + CRM + analytics)
- **Security-first** (Sandbox forzado + minimal tools)

### 3. Validación en tiempo real
- API keys válidas
- Webhooks alcanzables
- Puertos disponibles
- Permisos de archivos

### 4. Post-install
- Health check remoto (ping la instancia)
- Dashboard de status (¿está vivo el gateway?)
- "Test your agent" → envía mensaje de prueba

## Análisis de Viabilidad

### ✅ Pros
- **Barrera de entrada brutal:** Configurar OpenClaw hoy requiere leer ~30 páginas de docs
- **Diferenciador competitivo:** Otros frameworks (AutoGPT, LangChain) también son difíciles de configurar
- **Monetizable:** Freemium (gratis básico, pago por templates avanzados / hosting gestionado)
- **Sinergía con University:** Ambos educan usuarios en IA + OpenClaw
- **Stack simple:** Next.js + Vercel = MVP en 1-2 semanas

### ⚠️ Contras / Riesgos
- **Acoplamiento a versiones de OpenClaw:** Si cambian schemas, hay que actualizar
  - Mitigación: Parsear config.schema de OpenClaw (ya existe en gateway)
- **Seguridad:** Manejo de API keys en frontend
  - Mitigación: Nunca enviar a backend, solo validar client-side + cifrado local
- **Soporte multi-OS:** OpenClaw soporta macOS / Linux / Windows
  - Mitigación: Scripts install.sh / install.ps1 / install.command

### 💰 Modelo de Negocio

**Gratis (80% de features):**
- Wizard básico
- Templates core
- Descarga config + install script

**Pro ($9-19/mes):**
- Templates avanzados (enterprise security, multi-agent)
- Hosting gestionado (1-click deploy en VPS/Railway/Fly.io)
- Auto-update config cuando actualizan OpenClaw
- Health monitoring dashboard

**Enterprise (custom):**
- Onboarding gestionado
- Config auditoría + consultoría
- SLA soporte

## Roadmap

### Sprint 1 (1 semana) — MVP Wizard
- [ ] Setup Next.js + Tailwind + shadcn/ui
- [ ] Wireframes de los 7 pasos
- [ ] Step 1-2: Bienvenida + Provider LLM (solo Claude/OpenAI)
- [ ] Output: config.yaml generado dinámicamente

### Sprint 2 (1 semana) — Channels + Skills
- [ ] Step 3: Channels (WhatsApp/Telegram con instrucciones)
- [ ] Step 4: Seguridad (templates: dev/producción)
- [ ] Step 5: Skills (checkbox de 10-15 skills populares)

### Sprint 3 (3-5 días) — Personalidad + Deploy
- [ ] Step 6: SOUL.md generator con templates
- [ ] Step 7: Review + Download (zip con config.yaml + .env + install.sh)
- [ ] Deploy Vercel

### Sprint 4 (1 semana) — Polish + Templates
- [ ] 4 templates pre-configurados (Personal/Developer/Business/Security)
- [ ] Validación real de API keys (llamada test a provider)
- [ ] Health check post-install (ping gateway del usuario)

### Backlog futuro
- Modo "Import existing config" (sube tu config.yaml, edítalo en wizard)
- Dashboard de gestión (lista de instancias, status, restart remoto)
- Marketplace de templates comunitarios
- Auto-deploy a Railway/Fly.io (1-click hosting)

## Métricas de Éxito

- **Adoption:** 100 configs generadas en primer mes
- **Conversión:** 10% de free a Pro
- **Reducción de fricción:** Setup de OpenClaw baja de 2h a 15min
- **NPS:** >40 en usuarios que probaron el wizard

## Referencias Inspiración

- **WordPress:** Wizard "Famosos 5 minutos"
- **Vercel:** Onboarding 1-click de proyectos Next.js
- **Railway:** Deploy templates con variables pre-configuradas
- **shadcn/ui:** CLI que genera componentes configurados

## Próximos Pasos

1. Validar con Jose + Edu (¿lo usarían para clientes?)
2. Wireframes en Figma/Excalidraw (5-7 pantallas)
3. Sprint 1: Next.js setup + Steps 1-2 funcionales
4. PoC interno: Generar config para la instancia de Edu

---

**Creado:** 2026-02-18  
**Owner:** Jose Juan Jiménez  
**Repo:** https://github.com/jotajota1302/openclaw-configurator

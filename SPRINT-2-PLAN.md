# Sprint 2 - Configuración Mínima & UX Mejorada

**Objetivo:** Reducir fricción al mínimo. Hacer que instalar OpenClaw sea **tan fácil como instalar WordPress**.

---

## 🎯 Principio Guía: "5 Clicks to Running Agent"

**Estado actual:** Usuario completa 7 pasos → descarga archivos → edita .env manualmente → corre install.sh → configura canales

**Estado deseado:** Usuario completa pasos mínimos → 1-click deploy → agente funcionando

---

## 🚀 Mejoras Críticas de UX

### 1. **Configuración Mínima por Defecto**

**Problema:** Obligamos al usuario a configurar TODO antes de empezar.

**Solución:** Templates con defaults inteligentes

#### Templates Pre-configurados:
- **"Personal Assistant" (recomendado)** 
  - 1 provider (Claude con session token)
  - 1 channel (Telegram)
  - Allowlist mode
  - Skills básicos (weather, web search)
  - Personalidad: JARVIS

- **"Developer Agent"**
  - Claude + Codex fallback
  - Telegram + Discord
  - Skills: github, coding-agent, himalaya
  - Personalidad: técnica y directa

- **"Business Agent"**
  - Claude Pro
  - WhatsApp + Email
  - Skills: email, calendar, university-connector
  - Personalidad: profesional

- **"Custom"** (el wizard actual completo)

**Implementación:**
- Paso 0 nuevo: "Choose Template or Start from Scratch"
- Si elige template → solo pide lo mínimo (API key + bot token)
- Si elige custom → wizard completo actual

---

### 2. **Validación en Tiempo Real**

**Problema:** Usuario descarga archivos con errores y se entera al intentar arrancar.

**Solución:**
- API key validation en el wizard (ping a Anthropic/OpenAI para verificar)
- Bot token validation (Telegram getMe)
- Preview de config antes de descargar
- "Test Configuration" button que simula el arranque

---

### 3. **1-Click Deploy**

**Problema:** Usuario tiene que correr install.sh manualmente, editar .env, etc.

**Solución:** Integración con Railway/Render

#### Opción A: Deploy to Railway
```
[Deploy to Railway] button
↓
Abre Railway con template pre-configurado
↓
Usuario pega API keys en Railway UI
↓
Railway despliega automáticamente
↓
Usuario recibe URL + webhook config
```

#### Opción B: Local Install Script Mejorado
```bash
# install.sh mejorado
- Detecta OS (macOS/Linux)
- Instala dependencias (npm, node) si faltan
- Copia archivos a ~/.openclaw/
- Interactivo: pide API keys si .env está vacío
- Arranca gateway automáticamente
- Abre http://localhost:18789 en navegador
```

---

### 4. **Post-Install Onboarding**

**Problema:** Usuario instala pero no sabe qué hacer después.

**Solución:** Wizard de onboarding post-install

1. Gateway arranca → abre http://localhost:18789
2. Onboarding flow:
   - ✅ Provider conectado (test API)
   - ✅ Channel conectado (envía mensaje de prueba)
   - ✅ Primer comando funcional
   - 📚 Tutorial: "Prueba estos 5 comandos"

---

### 5. **Configuración Incremental**

**Problema:** Usuario tiene que decidir TODO de golpe.

**Solución:** "Start Minimal, Add Later"

- **MVP Config:** 1 provider + 1 channel
- **Durante onboarding:** "Want to add WhatsApp? Click here"
- **Dashboard post-install:** UI para añadir skills/channels/providers sin reiniciar

---

## 📋 Roadmap Sprint 2

### Fase 1: Templates (1 día)
- [ ] Diseño de 3 templates (Personal, Developer, Business)
- [ ] Paso 0: Template selection con preview
- [ ] Template → Pre-fill wizard con defaults
- [ ] "Customize Template" → salta a paso específico

### Fase 2: Validación (1 día)
- [ ] API key validator (Anthropic ping)
- [ ] Bot token validator (Telegram getMe)
- [ ] Config preview antes de download
- [ ] "Test Configuration" button

### Fase 3: Deploy Automation (2 días)
- [ ] Railway template (`railway.toml`)
- [ ] "Deploy to Railway" button en Step 7
- [ ] Railway environment variables auto-config
- [ ] Post-deploy webhook setup

### Fase 4: Install Script v2 (1 día)
- [ ] OS detection
- [ ] Interactive .env prompts
- [ ] Auto-start gateway
- [ ] Open browser to control panel

### Fase 5: Onboarding (1 día)
- [ ] Post-install checklist UI
- [ ] Test connections (provider + channel)
- [ ] Send test message
- [ ] Quick tutorial (5 example commands)

---

## 🎯 Métricas de Éxito Sprint 2

- **Time to First Message:** < 10 minutos (desde "empezar wizard" hasta "recibir respuesta del agente")
- **Error Rate:** < 5% (configs que no arrancan)
- **Template Usage:** > 70% eligen template vs custom
- **1-Click Deploy:** > 50% usan Railway vs manual install

---

## 🛠️ Stack Additions

- **API Testing:** axios para validar keys/tokens
- **Railway Integration:** railway.toml + deploy button
- **UI Components:** Preview modal, validation indicators, progress checklist

---

## 🚧 Bloqueadores / Preguntas

1. **Railway API:** ¿Tiene API para crear proyectos programáticamente o solo via template?
2. **Validation Security:** ¿Enviar API keys al frontend es seguro? Alternativa: backend validation API
3. **Post-install Onboarding:** ¿Requiere modificar OpenClaw core o es un skill separado?

---

**Siguiente:** Validar este plan con Jose → priorizar fases → empezar Sprint 2

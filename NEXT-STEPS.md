# OpenClaw Configurator - Next Steps 🚀

## ✅ Sprint 1 Completado (HOY)

**Lo que tenemos:**
- Wizard funcional de 7 pasos
- Generación de `openclaw.yaml` + `.env` + `install.sh`
- UI responsive con Tailwind
- Repo en GitHub
- README completo

**Demo:** http://localhost:3000

---

## 🎯 Objetivo Sprint 2: De "Wizard" a "1-Click Install"

### Estado Actual (Sprint 1)
```
Usuario → Wizard (7 pasos) → Descarga 3 archivos → Edita .env → Corre install.sh
→ Configura canales manualmente → Arranca gateway → Prueba primer comando
⏱️ Tiempo total: ~30-60 min
❌ Fricción: Edición manual, comandos terminal, troubleshooting
```

### Estado Deseado (Sprint 2)
```
Usuario → Elige template (1 click) → Pega API key → Deploy to Railway/Local
→ Agente funcionando + mensaje de prueba enviado
⏱️ Tiempo total: ~5-10 min
✅ Cero fricción: Todo automático, validación en tiempo real
```

---

## 🚀 Propuestas Clave (Priorizar)

### 1️⃣ **Templates Pre-configurados** (CRÍTICO)
**Problema:** Obligamos al usuario a decidir TODO antes de empezar.

**Solución:**
- Paso 0: "Elige tu caso de uso"
  - 🤖 Personal Assistant (Claude + Telegram)
  - 💻 Developer Agent (Claude + Codex + GitHub)
  - 💼 Business Agent (Claude + WhatsApp + Email)
  - ⚙️ Custom (wizard completo)

**Impacto:** Reduce pasos de 7 a 2-3 para el 80% de usuarios.

---

### 2️⃣ **Validación en Tiempo Real** (ALTA)
**Problema:** Usuario descarga config rota y se entera al arrancar.

**Solución:**
- Botón "Test API Key" (ping a Anthropic/OpenAI)
- Botón "Test Bot Token" (Telegram getMe)
- Preview de archivos antes de descargar
- Indicadores ✅/❌ en cada paso

**Impacto:** Reduce error rate de ~20% a <5%.

---

### 3️⃣ **1-Click Deploy to Railway** (GAME CHANGER)
**Problema:** Install manual es barrera de entrada masiva.

**Solución:**
- Botón "Deploy to Railway" en Step 7
- Railway template con todo pre-configurado
- Usuario solo pega API keys en Railway UI
- 5 min y está funcionando

**Impacto:** Reduce time-to-first-message de 60 min a 10 min.

---

### 4️⃣ **Install Script Interactivo** (MEDIA)
**Para usuarios que prefieren local:**

```bash
bash install.sh
→ Detecta OS
→ Instala node/npm si faltan
→ Pregunta API keys interactivamente
→ Arranca gateway automáticamente
→ Abre http://localhost:18789 en navegador
```

**Impacto:** Mejora experiencia local, pero Railway es mejor para la mayoría.

---

### 5️⃣ **Post-Install Onboarding** (BAJA, pero nice-to-have)
**Para después de que funcione:**

- Checklist: Provider conectado ✅, Channel conectado ✅
- Envía mensaje de prueba automáticamente
- Tutorial: "Prueba estos 5 comandos"

**Impacto:** Mejora retención, pero no es blocker para Sprint 2.

---

## 📊 Priorización Sprint 2

| Feature | Impacto | Esfuerzo | Prioridad | Días |
|---------|---------|----------|-----------|------|
| **Templates** | 🔥🔥🔥 | 1-2 días | **P0** | 1-2 |
| **Railway Deploy** | 🔥🔥🔥 | 2-3 días | **P0** | 2-3 |
| **Validación** | 🔥🔥 | 1 día | **P1** | 1 |
| **Install Script v2** | 🔥 | 1 día | **P2** | 1 |
| **Onboarding** | 🔥 | 1-2 días | **P3** | - |

**Sprint 2 recomendado:** P0 + P1 = Templates + Railway + Validación (4-5 días)

---

## 🛠️ Tech Stack Sprint 2

### Additions:
- **axios:** Validar API keys/tokens
- **Railway CLI/Template:** 1-click deploy
- **React Components:** Preview modal, validation indicators

### No Changes:
- Next.js 14, TypeScript, Tailwind (mismo stack)

---

## 🚧 Decisiones Pendientes

### 1. Railway vs Render vs Manual?
**Opciones:**
- Railway: Mejor UX, free tier generoso
- Render: Más conocido, pero setup más manual
- Manual (local): Más control, pero fricción

**Recomendación:** Railway primary, manual fallback.

### 2. Validación en Frontend o Backend?
**Problema:** Enviar API keys al frontend para validar es riesgo de seguridad.

**Opciones:**
- A) Frontend directo (más simple, menos seguro)
- B) Backend proxy (más seguro, más complejo)

**Recomendación:** Empezar con A (acceptable risk para wizard), mover a B si escala.

### 3. Templates: 3 o 5?
**Opciones:**
- 3 templates (Personal, Developer, Business)
- 5 templates (+ Researcher, Content Creator)

**Recomendación:** Empezar con 3, añadir más según feedback.

---

## 📋 Action Items (Próxima Sesión)

1. **Revisar este plan con Jose**
   - ¿Prioridades correctas?
   - ¿Railway o prefiere otra plataforma?
   - ¿Algo crítico que falte?

2. **Decidir alcance Sprint 2**
   - P0 + P1 (5 días)
   - Solo P0 (3 días)
   - Full Sprint 2 (7 días)

3. **Empezar desarrollo**
   - Template selection (Paso 0)
   - Railway template config
   - Validación API keys

---

**¿Qué opinas?** ¿Vamos con Templates + Railway + Validación o ajustamos prioridades?

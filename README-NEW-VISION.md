# [Nombre Comercial] - Tu Asistente Personal IA

**Versión:** 0.4.0-alpha (Transición a modelo SaaS)
**Estado:** En desarrollo - Pivote a plataforma comercial
**Fecha:** Febrero 2026

---

## 🎯 ¿Qué es esto?

Una plataforma donde **cualquier persona** puede comprar y configurar su propio asistente personal IA en minutos, sin necesidad de saber programar.

### De:
❌ "Herramienta técnica para desarrolladores que quieren configurar OpenClaw"

### A:
✅ "Plataforma SaaS donde particulares compran asistentes IA personalizados"

---

## 🚀 Propuesta de Valor

**Para el usuario final:**
> "Como tener un asistente personal que nunca duerme, directamente en tu WhatsApp o Telegram"

**Beneficios clave:**
- ✅ Configuración en menos de 10 minutos
- ✅ No necesitas saber programar
- ✅ Funciona en tus apps de mensajería favoritas
- ✅ Responde al instante, 24/7
- ✅ Privado y seguro, solo tú tienes acceso
- ✅ Aprende de ti y mejora con el tiempo

---

## 💰 Modelo de Negocio

### Planes de Suscripción:

| Plan | Precio | Canales | Funcionalidades | Ideal para |
|------|--------|---------|-----------------|------------|
| **Personal** | €9.99/mes | 1 canal (Telegram o WhatsApp) | Búsqueda web, clima, tareas básicas | Uso personal |
| **Pro** | €29.99/mes | Múltiples canales | Todo lo anterior + GitHub, Email, Calendar | Profesionales, freelancers |
| **Business** | €99/mes | Ilimitado | Todo + integraciones empresariales + soporte 24/7 | Equipos, empresas |

**Descuentos:**
- Pago anual: 2 meses gratis (17% descuento)
- Early adopters: 50% primer mes

---

## 🏗️ Arquitectura

```
Landing Comercial
       ↓
Selección de Plan
       ↓
Pago con Stripe
       ↓
Configurador Simplificado (4 pasos)
   1. Elige canal (Telegram/WhatsApp/Discord)
   2. Conecta tu cuenta (tutorial visual)
   3. Personaliza (nombre, emoji, tono)
   4. ¡Listo!
       ↓
Deploy Automático (Railway)
       ↓
Asistente Funcionando
       ↓
Dashboard de Gestión
```

---

## 🛠️ Tech Stack

### Frontend:
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + tailwindcss-animate
- **State:** React Context API
- **Payments:** Stripe Checkout + Webhooks

### Backend:
- **Database:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth
- **API:** Next.js API Routes
- **Deployment Platform:** Railway (para instancias de asistentes)

### Infrastructure:
- **Hosting:** Vercel (para la plataforma web)
- **Assistants:** Railway (una instancia por usuario)
- **Payments:** Stripe
- **Email:** Resend / SendGrid

---

## 📂 Estructura del Proyecto

```
openclaw-configurator/
├── app/
│   ├── page.tsx                    # Landing comercial (NUEVA)
│   ├── pricing/
│   │   └── page.tsx                # Planes y precios (NUEVO)
│   ├── onboarding/
│   │   ├── page.tsx                # Verificación post-pago (NUEVO)
│   │   └── setup/
│   │       └── page.tsx            # Configurador simplificado (NUEVO)
│   ├── dashboard/
│   │   └── page.tsx                # Dashboard del usuario (NUEVO)
│   ├── api/
│   │   ├── checkout/
│   │   │   └── route.ts            # Crear Stripe session (NUEVO)
│   │   ├── webhooks/
│   │   │   └── stripe/
│   │   │       └── route.ts        # Webhook de Stripe (NUEVO)
│   │   └── deploy/
│   │       └── route.ts            # Deploy automático a Railway (NUEVO)
│   └── wizard/                     # Wizard técnico antiguo (DEPRECADO)
│       └── ...                     # Mantener por ahora como fallback
├── lib/
│   ├── stripe.ts                   # Cliente de Stripe (NUEVO)
│   ├── supabase.ts                 # Cliente de Supabase (NUEVO)
│   ├── railway-deploy.ts           # Lógica de deploy (NUEVO)
│   └── plans.ts                    # Definición de planes (NUEVO)
├── components/
│   ├── pricing/
│   │   ├── PricingCard.tsx         # Card de plan (NUEVO)
│   │   └── PricingTable.tsx        # Tabla comparativa (NUEVO)
│   ├── onboarding/
│   │   ├── StepChannelSelection.tsx # Paso 1 (NUEVO)
│   │   ├── StepConnectChannel.tsx   # Paso 2 (NUEVO)
│   │   ├── StepPersonalize.tsx      # Paso 3 (NUEVO)
│   │   └── StepDeploy.tsx           # Paso 4 (NUEVO)
│   └── dashboard/
│       ├── AssistantStatus.tsx     # Estado del asistente (NUEVO)
│       └── ChannelManager.tsx      # Gestión de canales (NUEVO)
├── supabase/
│   └── migrations/                 # Migraciones de DB (NUEVO)
├── public/
│   ├── tutorials/                  # Videos tutoriales (NUEVO)
│   └── images/                     # Assets de marketing
├── BUSINESS-MODEL-TRANSITION.md    # Este documento
├── README-NEW-VISION.md            # Este archivo
└── README.md                       # README antiguo (actualizar)
```

---

## 🎯 Roadmap

### ✅ Sprint 1-2: Configurador Técnico (COMPLETADO)
- Wizard de 7 pasos funcional
- Generación de archivos
- Deploy manual

### 🚧 Sprint 3: MVP Comercial (EN DESARROLLO)
**Objetivo:** Primera versión vendible

**Tareas:**
- [ ] Landing comercial con lenguaje para usuario final
- [ ] Página de pricing (3 planes)
- [ ] Integración básica con Stripe
- [ ] Setup de Supabase
- [ ] Configurador simplificado (4 pasos)
- [ ] Deploy automático a Railway
- [ ] Página de "¡Listo!" con QR/link
- [ ] Testing end-to-end del flujo completo

**Duración estimada:** 12-16 días

### 📅 Sprint 4: Dashboard y Mejoras
- [ ] Dashboard del usuario
- [ ] Gestión de canales
- [ ] Edición de configuración
- [ ] Facturación y billing
- [ ] Soporte y FAQ
- [ ] Analytics básico

**Duración estimada:** 7-10 días

### 📅 Sprint 5: Growth y Optimización
- [ ] Onboarding mejorado con tutorial interactivo
- [ ] A/B testing de landing
- [ ] Programa de referidos
- [ ] Integraciones adicionales
- [ ] App móvil (opcional)

---

## 🚀 Cómo Empezar (Para Desarrolladores)

### Prerequisites
- Node.js 18+
- npm/pnpm
- Cuenta de Stripe (test mode)
- Cuenta de Supabase (free tier)
- Cuenta de Railway (free tier)

### Setup Local

```bash
# Clonar repo
git clone https://github.com/[repo]/openclaw-configurator.git
cd openclaw-configurator

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local

# Editar .env.local con tus keys:
# - STRIPE_SECRET_KEY
# - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
# - STRIPE_WEBHOOK_SECRET
# - SUPABASE_URL
# - SUPABASE_ANON_KEY
# - RAILWAY_API_TOKEN

# Setup de base de datos
npm run db:setup

# Correr en desarrollo
npm run dev
```

Abre http://localhost:3000

### Testing del Flujo de Pago

1. Usa las tarjetas de prueba de Stripe:
   - **Éxito:** 4242 4242 4242 4242
   - **Fallo:** 4000 0000 0000 0002
   - **3D Secure:** 4000 0025 0000 3155

2. Usa emails de prueba: `test+[algo]@example.com`

3. Webhook local con Stripe CLI:
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

---

## 📊 Métricas Clave

### Conversión:
- Landing → Pricing: > 40%
- Pricing → Checkout: > 20%
- Checkout → Pago: > 60%
- Pago → Activo: > 90%

### Experiencia:
- Time to First Message: < 10 min
- Configuración completada: > 90%
- Deploy success rate: > 95%

### Negocio:
- MRR objetivo: €10K primer mes
- Churn rate: < 10% mensual
- CAC (Customer Acquisition Cost): < €50
- LTV (Lifetime Value): > €300

---

## 🔒 Seguridad y Privacidad

### Datos del Usuario:
- ✅ Encriptación en tránsito (HTTPS)
- ✅ Encriptación en reposo (Supabase)
- ✅ No almacenamos tokens en texto plano
- ✅ Política de allowlist por defecto
- ✅ Cumplimiento GDPR

### Procesamiento de Pagos:
- ✅ PCI compliant (vía Stripe)
- ✅ No almacenamos datos de tarjetas
- ✅ Facturación automática segura

---

## 🤝 Contribución

**Nota:** Este proyecto está en transición a modelo comercial.

Si quieres contribuir:
1. Revisa el documento [BUSINESS-MODEL-TRANSITION.md](./BUSINESS-MODEL-TRANSITION.md)
2. Chequea los issues abiertos
3. Haz fork y crea un PR

---

## 📄 Licencia

[Pendiente de definir - Probablemente propietaria para el SaaS]

---

## 🔗 Links

- **Documentación OpenClaw:** https://docs.openclaw.ai
- **Discord Community:** https://discord.gg/clawd
- **Soporte:** support@[dominio].com
- **Status Page:** status.[dominio].com

---

## 📝 Notas de Desarrollo

### Estado Actual (23 Feb 2026):
- ✅ Análisis completo del cambio de modelo
- ✅ Plan detallado documentado
- ⏳ Pendiente: decisiones técnicas finales
- ⏳ Pendiente: nombre comercial
- ⏳ Pendiente: inicio de desarrollo Sprint 3

### Decisiones Pendientes:
1. Nombre comercial definitivo
2. Precios finales de planes
3. Elegir entre Supabase vs PlanetScale
4. Modelo de gestión de API keys (pool vs dedicado vs proxy)

### Próxima Sesión:
- Validar plan completo
- Tomar decisiones pendientes
- Configurar Stripe (productos y precios)
- Setup de Supabase
- Comenzar desarrollo de landing comercial

---

**Última actualización:** 2026-02-23
**Mantenido por:** [Equipo]

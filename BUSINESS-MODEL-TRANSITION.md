# Transición a Modelo de Negocio SaaS - Plan de Implementación

**Fecha:** 2026-02-23
**Estado:** Planificación inicial
**Objetivo:** Transformar el configurador técnico en plataforma comercial de venta de asistentes IA

---

## 🎯 VISIÓN DEL PRODUCTO

### De:
**"OpenClaw Configurator"** - Herramienta técnica para desarrolladores que quieren configurar OpenClaw

### A:
**"[Nombre Comercial]"** - Plataforma para que cualquier persona compre y use su asistente personal IA

---

## 🏗️ ARQUITECTURA DEL NUEVO SISTEMA

```
┌─────────────────────────────────────────────────────────────┐
│                    LANDING COMERCIAL                        │
│  - Propuesta de valor para usuario final                   │
│  - Planes de precio visibles                               │
│  - Testimonios / Social proof                              │
│  - CTA: "Consigue tu asistente"                           │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                  SELECCIÓN DE PLAN                          │
│  Plan Personal (€9.99/mes)                                 │
│  Plan Pro (€29.99/mes)                                     │
│  Plan Business (€99/mes)                                   │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                   STRIPE CHECKOUT                           │
│  - Pago seguro con Stripe                                  │
│  - Suscripción mensual/anual                               │
│  - Email de confirmación                                   │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│            CONFIGURADOR SIMPLIFICADO                        │
│  (Solo 4-5 pasos sencillos)                               │
│  1. Elige canal (Telegram/WhatsApp/Discord)               │
│  2. Conecta tu cuenta (tutorial visual)                   │
│  3. Personaliza nombre y tono                             │
│  4. Confirmar                                             │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│              DEPLOY AUTOMÁTICO                              │
│  - Backend crea instancia en Railway                       │
│  - Configura variables automáticamente                     │
│  - Despliega asistente                                     │
│  - Conecta webhook del canal                              │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                 ASISTENTE LISTO                             │
│  - "¡Tu asistente está listo!"                            │
│  - Link/QR para empezar a chatear                         │
│  - Tutorial de primeros pasos                             │
│  - Dashboard para gestionar                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 📦 COMPONENTES A DESARROLLAR

### 1. NUEVA LANDING COMERCIAL (Prioridad: CRÍTICA)

**Ubicación:** `/app/page.tsx` (reemplazar completamente)

**Secciones necesarias:**

1. **Hero Section**
   - Headline: "Tu Asistente Personal IA, Disponible 24/7"
   - Subheadline: "Como tener un ayudante que nunca duerme, directamente en tu WhatsApp o Telegram"
   - CTA principal: "Ver planes y precios"
   - Imagen/video demo

2. **Beneficios Clave (NO features técnicas)**
   - ✅ Responde instantáneamente en tu mensajería favorita
   - ✅ Te ayuda con tareas del día a día
   - ✅ Aprende de ti y mejora con el tiempo
   - ✅ Privado y seguro, solo tú tienes acceso

3. **Casos de Uso (con ejemplos reales)**
   - "María lo usa para organizar su agenda diaria"
   - "Carlos lo usa para buscar información rápidamente"
   - "Equipo de Ventas lo usa para responder clientes"

4. **Planes y Precios**
   - Comparación clara de planes
   - Qué incluye cada uno
   - CTA por plan: "Empezar ahora"

5. **FAQ**
   - "¿Necesito saber programar?" → No
   - "¿Es seguro?" → Sí, privacidad garantizada
   - "¿Puedo cancelar cuando quiera?" → Sí
   - "¿Qué canales soporta?" → Telegram, WhatsApp, Discord

6. **Social Proof**
   - Testimonios de usuarios
   - "Únete a +500 personas que ya tienen su asistente"

**Lenguaje:**
- Tú/Tu (no "Usuario" ni jerga técnica)
- Beneficios, no características
- Comparaciones sencillas ("Como tener...")
- Llamados a acción claros

---

### 2. SISTEMA DE PLANES Y PRECIOS (Prioridad: CRÍTICA)

**Ubicación:** Nueva página `/app/pricing/page.tsx`

**Planes sugeridos:**

```typescript
interface PricingPlan {
  id: string;
  name: string;
  price: number; // en €/mes
  priceAnnual: number; // en €/año (descuento)
  description: string;
  features: string[];
  limitations: string[];
  stripePriceId: string;
  recommended?: boolean;
}

const PLANS: PricingPlan[] = [
  {
    id: "personal",
    name: "Personal",
    price: 9.99,
    priceAnnual: 99,
    description: "Para uso personal básico",
    features: [
      "1 canal de mensajería (Telegram o WhatsApp)",
      "Respuestas ilimitadas",
      "Personalización de nombre y tono",
      "Funciones básicas (clima, búsqueda web)",
      "Soporte por email"
    ],
    limitations: ["1 canal", "Skills básicos"],
    stripePriceId: "price_xxx" // Stripe Price ID
  },
  {
    id: "pro",
    name: "Pro",
    price: 29.99,
    priceAnnual: 299,
    description: "Para usuarios avanzados",
    recommended: true,
    features: [
      "Múltiples canales (Telegram + WhatsApp + Discord)",
      "Todas las funciones de Personal +",
      "Skills avanzados (GitHub, Email, Calendar)",
      "Respuestas más rápidas",
      "Soporte prioritario"
    ],
    limitations: [],
    stripePriceId: "price_yyy"
  },
  {
    id: "business",
    name: "Business",
    price: 99,
    priceAnnual: 990,
    description: "Para equipos y negocios",
    features: [
      "Todo lo de Pro +",
      "Múltiples usuarios en allowlist",
      "Integraciones empresariales",
      "Análisis y reportes",
      "Onboarding personalizado",
      "Soporte 24/7"
    ],
    limitations: [],
    stripePriceId: "price_zzz"
  }
];
```

**Interfaz:**
- Cards de planes lado a lado
- Toggle mensual/anual (con descuento anual visible)
- Badge "Recomendado" en plan Pro
- Botón "Empezar ahora" en cada plan → Stripe Checkout

---

### 3. INTEGRACIÓN CON STRIPE (Prioridad: CRÍTICA)

**Tech Stack necesario:**
```json
{
  "dependencies": {
    "stripe": "^14.0.0",
    "@stripe/stripe-js": "^2.4.0",
    "micro": "^10.0.1" // Para API routes
  }
}
```

**Componentes a crear:**

#### A. Stripe Checkout Flow
**Archivo:** `/app/api/checkout/route.ts`

```typescript
// API route para crear Checkout Session
import Stripe from 'stripe';

export async function POST(req: Request) {
  const { planId } = await req.json();

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: PLANS[planId].stripePriceId,
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_URL}/onboarding?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/pricing`,
    metadata: {
      planId: planId,
    },
  });

  return Response.json({ sessionId: session.id });
}
```

#### B. Webhook Handler
**Archivo:** `/app/api/webhooks/stripe/route.ts`

```typescript
// Maneja eventos de Stripe (pago completado, cancelación, etc.)
import Stripe from 'stripe';

export async function POST(req: Request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const sig = req.headers.get('stripe-signature')!;

  const event = stripe.webhooks.constructEvent(
    await req.text(),
    sig,
    process.env.STRIPE_WEBHOOK_SECRET!
  );

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    // Aquí:
    // 1. Guardar usuario en base de datos
    // 2. Iniciar proceso de configuración
    // 3. Enviar email de bienvenida
  }

  return Response.json({ received: true });
}
```

#### C. Verificación de Sesión
**Archivo:** `/app/onboarding/page.tsx`

```typescript
// Página de onboarding post-pago
// Verifica que el pago se completó antes de mostrar configurador
```

**Variables de entorno necesarias:**
```env
STRIPE_SECRET_KEY=sk_test_xxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
```

---

### 4. BASE DE DATOS (Prioridad: ALTA)

**¿Por qué la necesitamos ahora?**
- Guardar usuarios que pagaron
- Vincular pago con instancia del asistente
- Tracking de uso/límites
- Dashboard del usuario

**Opciones tecnológicas:**

1. **Supabase** (Recomendado)
   - PostgreSQL
   - Auth incluido
   - Real-time
   - Free tier generoso

2. **PlanetScale** (Alternativa)
   - MySQL serverless
   - Fácil de escalar

3. **Prisma + PostgreSQL**
   - Mayor control
   - Más setup inicial

**Schema inicial:**

```sql
-- Tabla de usuarios
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  stripe_customer_id VARCHAR(255) UNIQUE,
  stripe_subscription_id VARCHAR(255),
  plan_id VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de asistentes (instancias)
CREATE TABLE assistants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  name VARCHAR(100),
  emoji VARCHAR(10),
  vibe TEXT,
  plan_id VARCHAR(50),
  railway_deployment_id VARCHAR(255),
  railway_url VARCHAR(255),
  status VARCHAR(50), -- 'configuring' | 'active' | 'paused' | 'error'
  config JSONB, -- Configuración completa del asistente
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de canales configurados
CREATE TABLE channels (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  assistant_id UUID REFERENCES assistants(id),
  type VARCHAR(50), -- 'telegram' | 'whatsapp' | 'discord'
  token VARCHAR(255), -- Bot token encriptado
  webhook_url VARCHAR(255),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

### 5. CONFIGURADOR SIMPLIFICADO (Prioridad: ALTA)

**Ubicación:** `/app/onboarding/setup/page.tsx` (nuevo flujo post-pago)

**Diferencias con wizard actual:**

| Wizard Actual (Técnico) | Configurador Nuevo (No Técnico) |
|--------------------------|----------------------------------|
| 7 pasos | 4 pasos máximo |
| "Provider Setup" | (Oculto, automático según plan) |
| "Channels" | "¿Dónde quieres hablar con tu asistente?" |
| Requiere API keys manualmente | API keys gestionadas automáticamente |
| "Security & Allowlist" | "¿Quién puede usar tu asistente?" (tú solo / tú + otros) |
| "Select Skills" | (Pre-seleccionado según plan) |
| "Personality" | "Personaliza tu asistente" (nombre, tono) |
| "Review" | (Skip, no necesario) |
| "Download Files" | (No existe, deploy es automático) |

**Nuevo flujo simplificado:**

```typescript
// Paso 1: Canal de mensajería
<StepChannelSelection>
  <h2>¿Dónde quieres hablar con tu asistente?</h2>
  <ChannelCard
    name="Telegram"
    icon="💬"
    description="Rápido y fácil de configurar"
    recommended={true}
  />
  <ChannelCard
    name="WhatsApp"
    icon="📱"
    description="Usa tu número de siempre"
    comingSoon={plan === 'personal'} // Si solo tiene plan básico
  />
  <ChannelCard
    name="Discord"
    icon="🎮"
    description="Perfecto si ya usas Discord"
    comingSoon={plan === 'personal'}
  />
</StepChannelSelection>

// Paso 2: Conectar canal (tutorial visual)
<StepConnectChannel channel={selectedChannel}>
  <h2>Conecta tu {selectedChannel}</h2>
  {selectedChannel === 'telegram' && (
    <TelegramSetupGuide>
      <ol>
        <li>Abre Telegram y busca @BotFather</li>
        <li>Envía el comando /newbot</li>
        <li>Elige un nombre para tu asistente</li>
        <li>Copia el token que te da</li>
        <li>Pégalo aquí abajo 👇</li>
      </ol>
      <VideoTutorial src="/tutorials/telegram-bot.mp4" />
      <Input placeholder="Pega tu token aquí" />
      <Button>Verificar y continuar</Button>
    </TelegramSetupGuide>
  )}
</StepConnectChannel>

// Paso 3: Personalización
<StepPersonalize>
  <h2>Dale personalidad a tu asistente</h2>
  <Input
    label="¿Cómo quieres llamarlo?"
    placeholder="Ej: Alex, María, Mi Asistente..."
    defaultValue="JARVIS"
  />
  <EmojiPicker label="Elige un avatar" />
  <TonePicker
    options={['Formal', 'Casual', 'Divertido', 'Profesional']}
    label="¿Qué tono prefieres?"
  />
</StepPersonalize>

// Paso 4: Confirmación y deploy automático
<StepDeploy>
  <h2>¡Ya casi está!</h2>
  <p>Tu asistente <strong>{name}</strong> se está preparando...</p>
  <ProgressBar steps={[
    'Creando tu asistente',
    'Configurando inteligencia',
    'Conectando con ' + channel,
    'Haciendo pruebas finales',
    '¡Listo para usar!'
  ]} />
  {/* Mientras tanto, en el backend:
      - Crear instancia en Railway
      - Configurar variables de entorno
      - Deploy automático
      - Configurar webhook del canal
  */}
</StepDeploy>

// Paso 5: ¡Listo!
<StepComplete>
  <h2>🎉 ¡Tu asistente está listo!</h2>
  <p>Abre {channel} y empieza a chatear</p>
  {channel === 'telegram' && (
    <QRCode value={`https://t.me/${botUsername}`} />
  )}
  <Button>Abrir {channel}</Button>
  <Button variant="secondary">Ver tutorial de primeros pasos</Button>
  <Button variant="ghost">Ir al dashboard</Button>
</StepComplete>
```

---

### 6. DEPLOY AUTOMÁTICO A RAILWAY (Prioridad: CRÍTICA)

**Problema actual:** Usuario descarga archivos y hace deploy manual

**Solución:** Backend automáticamente despliega a Railway después del pago

**Implementación:**

#### A. Railway API Integration

```typescript
// /lib/railway-deploy.ts

interface RailwayDeployConfig {
  userId: string;
  assistantId: string;
  config: WizardConfig;
  channelToken: string;
  channelType: 'telegram' | 'whatsapp' | 'discord';
}

export async function deployToRailway(config: RailwayDeployConfig) {
  const railwayToken = process.env.RAILWAY_API_TOKEN;

  // 1. Crear proyecto en Railway
  const project = await fetch('https://backboard.railway.app/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${railwayToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        mutation {
          projectCreate(input: {
            name: "openclaw-${config.assistantId}"
          }) {
            id
          }
        }
      `
    })
  });

  // 2. Configurar variables de entorno
  const envVars = {
    ANTHROPIC_API_KEY: config.config.providers.anthropic?.apiKey,
    TELEGRAM_BOT_TOKEN: config.channelToken,
    ALLOWLIST: config.config.security.allowlist.join(','),
    // ... más variables
  };

  // 3. Deploy del código OpenClaw
  // Railway automáticamente detecta y despliega desde el Dockerfile

  // 4. Configurar webhook del canal
  const webhookUrl = `https://${projectDomain}/webhook/${config.channelType}`;
  await configureChannelWebhook(config.channelType, config.channelToken, webhookUrl);

  return {
    projectId: project.id,
    deploymentUrl: `https://${projectDomain}`,
    dashboardUrl: `https://${projectDomain}/dashboard`,
  };
}
```

#### B. Variables de entorno necesarias
```env
RAILWAY_API_TOKEN=xxx
RAILWAY_TEAM_ID=xxx (si usas team en Railway)
```

#### C. Railway Template (para manual deploy opcional)
**Archivo:** `railway.toml` (ya existe, verificar/actualizar)

```toml
[build]
builder = "NIXPACKS"
buildCommand = "npm install"

[deploy]
startCommand = "npm start"
restartPolicyType = "ON_FAILURE"
restartPolicyMaxRetries = 10

[env]
ANTHROPIC_API_KEY = { required = true }
TELEGRAM_BOT_TOKEN = { required = false }
WHATSAPP_TOKEN = { required = false }
DISCORD_TOKEN = { required = false }
ALLOWLIST = { default = "" }
```

---

### 7. DASHBOARD DEL USUARIO (Prioridad: MEDIA)

**Ubicación:** `/app/dashboard/page.tsx`

**Funcionalidades:**

1. **Vista general del asistente**
   - Estado: Activo / Pausado / Error
   - Plan actual
   - Uso del mes (mensajes, requests)

2. **Gestión de canales**
   - Ver canales conectados
   - Añadir nuevo canal (si el plan lo permite)
   - Desconectar canal

3. **Configuración**
   - Cambiar nombre/emoji/tono
   - Editar allowlist
   - Cambiar funcionalidades (skills)

4. **Facturación**
   - Ver historial de pagos
   - Cambiar método de pago
   - Upgrade/downgrade de plan
   - Cancelar suscripción

5. **Soporte**
   - FAQ
   - Chat de soporte
   - Tutoriales

---

## 🔄 FLUJO COMPLETO END-TO-END

```
1. Usuario llega a landing
   ↓
2. Ve propuesta de valor en lenguaje sencillo
   ↓
3. Revisa planes y precios
   ↓
4. Click "Empezar ahora" en plan elegido
   ↓
5. Stripe Checkout (pago)
   ↓
6. Webhook confirma pago → guarda en DB
   ↓
7. Redirige a /onboarding
   ↓
8. Configurador simplificado (4 pasos):
   - Elige canal
   - Conecta canal (pega token)
   - Personaliza (nombre, tono)
   - Confirma
   ↓
9. Backend automáticamente:
   - Crea proyecto en Railway
   - Configura variables de entorno
   - Despliega OpenClaw
   - Configura webhook
   - Actualiza DB con deployment info
   ↓
10. "¡Listo!" → QR/link para chatear
    ↓
11. Usuario envía primer mensaje
    ↓
12. Asistente responde
    ↓
13. Usuario puede ir al dashboard para gestionar
```

---

## 📊 MÉTRICAS DE ÉXITO

### Conversión:
- **Landing → Pricing:** > 40% clics en CTA
- **Pricing → Checkout:** > 20% inician pago
- **Checkout → Pago completado:** > 60% completan pago
- **Pago → Asistente activo:** > 90% terminan configuración
- **Asistente activo → Primer mensaje:** > 80% envían mensaje

### Experiencia:
- **Time to First Message:** < 10 minutos desde el pago
- **Configuración completada:** > 90% usuarios terminan
- **Errores de deploy:** < 5%

### Negocio:
- **MRR (Monthly Recurring Revenue):** Objetivo €10K primer mes
- **Churn rate:** < 10% mensual
- **Customer Lifetime Value:** > €300

---

## ⏱️ ESTIMACIÓN DE TIEMPO

| Fase | Tarea | Tiempo | Prioridad |
|------|-------|--------|-----------|
| **1** | Nueva landing comercial | 2-3 días | CRÍTICA |
| **2** | Página de pricing | 1 día | CRÍTICA |
| **3** | Integración Stripe (checkout + webhooks) | 2-3 días | CRÍTICA |
| **4** | Setup base de datos (Supabase) | 1 día | ALTA |
| **5** | Configurador simplificado | 3-4 días | ALTA |
| **6** | Deploy automático a Railway | 3-4 días | CRÍTICA |
| **7** | Dashboard básico | 3-4 días | MEDIA |
| **8** | Testing end-to-end | 2 días | ALTA |
| **9** | Documentación y FAQ | 1 día | MEDIA |

**TOTAL:** 18-25 días de desarrollo

**Sprint recomendado:**
- **Sprint 3 (MVP Comercial):** Fases 1-6 (12-16 días) → Mínimo viable para vender
- **Sprint 4 (Dashboard):** Fase 7 + mejoras (7-10 días)

---

## 🚧 DECISIONES TÉCNICAS PENDIENTES

### 1. Base de Datos
**Opciones:**
- A) Supabase (PostgreSQL + Auth + Real-time)
- B) PlanetScale (MySQL serverless)
- C) Prisma + Railway PostgreSQL

**Recomendación:** Supabase (más completo, auth incluido, free tier)

### 2. Gestión de API Keys
**Problema:** Los usuarios NO deben pegar API keys (ellos no las tienen)

**Opciones:**
- A) Nosotros gestionamos pool de API keys (los usuarios usan las nuestras)
- B) Usuario paga, nosotros le compramos API key dedicada
- C) Modelo proxy: todas las requests pasan por nuestro proxy con nuestras keys

**Recomendación:**
- MVP: Opción A (pool compartido, más simple)
- Largo plazo: Opción C (mejor control y billing)

### 3. Railway vs Alternativas
**Opciones:**
- A) Railway (actual plan)
- B) Render
- C) Fly.io
- D) Own infrastructure (VPS)

**Recomendación:** Railway (mejor DX, API robusta, ya tiene template)

### 4. Autenticación de Usuarios
**Opciones:**
- A) Supabase Auth
- B) NextAuth.js
- C) Clerk
- D) Custom con JWT

**Recomendación:** Supabase Auth (integrado con DB)

### 5. Nombre Comercial
**Problema:** "OpenClaw Configurator" no funciona para B2C

**Opciones:**
- A) "ClawAssistant"
- B) "MyAI Assistant"
- C) "PersonalAI"
- D) "[Nombre creativo]"

**Decisión:** Pendiente de branding

---

## 📝 PRÓXIMOS PASOS INMEDIATOS

### Sesión de decisión (1-2 horas):
1. ✅ Validar este plan completo
2. ❓ Decidir nombre comercial
3. ❓ Confirmar precios de planes
4. ❓ Elegir stack técnico (DB, auth, etc.)
5. ❓ Priorizar: ¿MVP mínimo o completo?

### Después de decisiones:
1. Actualizar README.md con nueva visión
2. Crear estructura de carpetas para nuevo código
3. Setup Stripe (crear productos y precios)
4. Setup base de datos (Supabase)
5. Empezar desarrollo por fases

---

## 🎯 MVP MÍNIMO VIABLE (Si hay prisa)

Si necesitas lanzar RÁPIDO, este es el **mínimo absoluto**:

1. ✅ Landing comercial simple (1 página)
2. ✅ 1 plan único (€19.99/mes) - simplifica decisión
3. ✅ Stripe checkout básico
4. ✅ Configurador: solo Telegram + personalización
5. ✅ Deploy manual por ahora (automático v2)
6. ❌ Skip dashboard (v2)

**Tiempo MVP:** 7-10 días

**Luego iterar:**
- Añadir más planes
- Automatizar deploy
- Añadir dashboard
- Más canales

---

**¿Qué opinas? ¿Vamos con MVP o desarrollo completo? ¿Alguna decisión técnica que quieras cambiar?**

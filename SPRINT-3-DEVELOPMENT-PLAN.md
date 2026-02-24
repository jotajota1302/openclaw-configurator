# Sprint 3: Desarrollo Completo - Skillia Platform

**Proyecto:** Skillia - Plataforma de Asistentes Personales IA
**Inicio:** 24 Febrero 2026
**Duración estimada:** 18-25 días
**Modelo:** Desarrollo completo (no MVP mínimo)

---

## 🎯 Objetivo del Sprint

Transformar el configurador técnico en una **plataforma comercial completa** donde usuarios finales pueden:
1. Comprar planes de suscripción
2. Configurar su asistente en <10 minutos
3. Tener su asistente funcionando automáticamente
4. Gestionar su asistente desde un dashboard

---

## 📊 Fases de Desarrollo

### **FASE 1: Landing Comercial** ⏱️ 2-3 días

#### Día 1: Estructura y Hero Section
**Archivos a crear/modificar:**
- `app/page.tsx` (reemplazar completamente)
- `components/landing/HeroSection.tsx` (nuevo)
- `components/landing/FeatureCard.tsx` (nuevo)
- `public/images/hero-illustration.svg` (placeholder)

**Tareas específicas:**
- [x] Crear nueva estructura de landing page
- [ ] Hero section con:
  - Headline: "Tu Asistente Personal IA, Disponible 24/7"
  - Subheadline: "Como tener un ayudante que nunca duerme, directamente en tu WhatsApp o Telegram"
  - CTA principal: "Ver planes y precios"
  - Ilustración/imagen hero
- [ ] Animaciones de entrada (fade-in, slide-up)
- [ ] Versión responsive mobile-first

**Criterios de éxito:**
- ✅ Hero section atractivo y claro
- ✅ CTA visible y destacado
- ✅ Funciona perfectamente en móvil
- ✅ Tiempo de carga < 2s

---

#### Día 2: Beneficios, Casos de Uso y Social Proof
**Archivos a crear:**
- `components/landing/BenefitsSection.tsx`
- `components/landing/UseCaseCard.tsx`
- `components/landing/TestimonialCard.tsx`
- `components/landing/StatsSection.tsx`

**Tareas específicas:**
- [ ] Sección de beneficios con 4 cards:
  - "Responde al instante, 24/7"
  - "Funciona en tus apps favoritas"
  - "Privado y seguro"
  - "Sin necesidad de programar"
- [ ] Casos de uso con ejemplos:
  - Uso personal (organizar agenda)
  - Profesional (búsqueda de información)
  - Equipos (responder clientes)
- [ ] Testimonios (mockups por ahora)
- [ ] Sección de estadísticas:
  - "+500 asistentes activos"
  - "10,000+ mensajes procesados"
  - "4.8/5 satisfacción"

**Criterios de éxito:**
- ✅ Cada beneficio comunica valor claro
- ✅ Casos de uso con ejemplos concretos
- ✅ Social proof visible pero no invasivo

---

#### Día 3: FAQ, Footer y Optimización
**Archivos a crear:**
- `components/landing/FAQSection.tsx`
- `components/landing/Footer.tsx`
- `components/landing/CTASection.tsx`

**Tareas específicas:**
- [ ] FAQ con 8-10 preguntas comunes:
  - "¿Necesito saber programar?" → No
  - "¿Es seguro?" → Sí, explicación
  - "¿Qué canales soporta?"
  - "¿Puedo cancelar cuando quiera?"
  - "¿Cómo funciona el pago?"
  - "¿Hay límite de mensajes?"
  - "¿Puedo cambiar de plan?"
  - "¿Qué pasa con mis datos?"
- [ ] CTA final (segunda oportunidad de conversión)
- [ ] Footer con:
  - Links a pricing, FAQ, contacto
  - Legal (términos, privacidad)
  - Redes sociales
  - Copyright
- [ ] Optimización SEO básica:
  - Meta tags
  - Open Graph
  - Structured data
- [ ] Analytics (Google Analytics o Plausible)

**Criterios de éxito:**
- ✅ FAQ responde dudas principales
- ✅ Footer profesional y completo
- ✅ SEO básico implementado
- ✅ Analytics funcionando

---

### **FASE 2: Sistema de Pricing** ⏱️ 1 día

#### Día 4: Página de Pricing y Lógica de Planes
**Archivos a crear:**
- `app/pricing/page.tsx`
- `components/pricing/PricingCard.tsx`
- `components/pricing/PricingTable.tsx`
- `components/pricing/FeatureComparison.tsx`
- `lib/plans.ts`

**Tareas específicas:**
- [ ] Definir planes en `lib/plans.ts`:
  ```typescript
  export const PLANS = {
    personal: {
      id: 'personal',
      name: 'Personal',
      price: 9.99,
      priceAnnual: 99,
      features: [...],
      stripePriceId: 'price_xxx' // Configurar después
    },
    pro: { ... },
    business: { ... }
  }
  ```
- [ ] Pricing cards con:
  - Nombre del plan
  - Precio mensual/anual (toggle)
  - Lista de features
  - Badge "Recomendado" en Pro
  - CTA "Empezar ahora"
- [ ] Tabla comparativa de features
- [ ] Calculadora de ahorro anual
- [ ] FAQ específica de pricing

**Criterios de éxito:**
- ✅ 3 planes claramente diferenciados
- ✅ Toggle mensual/anual funcional
- ✅ CTA en cada plan
- ✅ Mobile responsive

---

### **FASE 3: Integración con Stripe** ⏱️ 2-3 días

#### Día 5: Setup de Stripe y Checkout
**Archivos a crear:**
- `lib/stripe.ts`
- `app/api/checkout/route.ts`
- `components/pricing/CheckoutButton.tsx`

**Tareas específicas:**
- [ ] Crear cuenta Stripe (test mode)
- [ ] Instalar dependencias:
  ```bash
  npm install stripe @stripe/stripe-js
  ```
- [ ] Crear productos en Stripe Dashboard:
  - Skillia Personal (€9.99/mes)
  - Skillia Pro (€29.99/mes)
  - Skillia Business (€99/mes)
  - Versiones anuales con descuento
- [ ] Configurar cliente de Stripe:
  ```typescript
  // lib/stripe.ts
  import Stripe from 'stripe';
  export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  ```
- [ ] API route para crear checkout session:
  ```typescript
  // app/api/checkout/route.ts
  POST /api/checkout
  Body: { planId: string, billingPeriod: 'monthly' | 'annual' }
  Response: { sessionId: string }
  ```
- [ ] Componente CheckoutButton:
  - Llama a `/api/checkout`
  - Redirige a Stripe Checkout
  - Loading state
  - Error handling

**Criterios de éxito:**
- ✅ Productos configurados en Stripe
- ✅ Checkout session se crea correctamente
- ✅ Redirección a Stripe funciona
- ✅ Test con tarjeta 4242... funciona

**Variables de entorno necesarias:**
```env
STRIPE_SECRET_KEY=sk_test_xxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
```

---

#### Día 6-7: Webhooks y Confirmación de Pago
**Archivos a crear:**
- `app/api/webhooks/stripe/route.ts`
- `lib/db/users.ts` (preparar para Supabase)
- `app/onboarding/page.tsx`

**Tareas específicas:**
- [ ] Setup de webhook endpoint:
  ```typescript
  POST /api/webhooks/stripe
  - Verificar signature
  - Procesar eventos
  ```
- [ ] Eventos a manejar:
  - `checkout.session.completed`: Pago exitoso
  - `customer.subscription.deleted`: Cancelación
  - `customer.subscription.updated`: Cambio de plan
  - `invoice.payment_failed`: Pago fallido
- [ ] En `checkout.session.completed`:
  - Extraer customer_email, plan_id, subscription_id
  - Guardar en DB temporal (archivo JSON por ahora)
  - TODO: Integrar Supabase después
- [ ] Página de onboarding (`/onboarding`):
  - Verificar que session_id existe
  - Mostrar "¡Pago exitoso!"
  - CTA: "Configurar mi asistente"
- [ ] Página de cancelación (`/checkout/cancelled`)
- [ ] Testing local con Stripe CLI:
  ```bash
  stripe listen --forward-to localhost:3000/api/webhooks/stripe
  stripe trigger checkout.session.completed
  ```

**Criterios de éxito:**
- ✅ Webhook recibe eventos de Stripe
- ✅ Signature verification funciona
- ✅ Datos del pago se guardan correctamente
- ✅ Usuario es redirigido a onboarding

**Variables de entorno adicionales:**
```env
STRIPE_WEBHOOK_SECRET=whsec_xxx
NEXT_PUBLIC_URL=http://localhost:3000
```

---

### **FASE 4: Base de Datos (Supabase)** ⏱️ 1 día

#### Día 8: Setup y Schema
**Archivos a crear:**
- `lib/supabase.ts`
- `supabase/migrations/001_initial_schema.sql`
- `types/database.ts`

**Tareas específicas:**
- [ ] Crear proyecto en Supabase
- [ ] Instalar dependencias:
  ```bash
  npm install @supabase/supabase-js
  npm install -D supabase
  ```
- [ ] Inicializar Supabase:
  ```bash
  npx supabase init
  npx supabase login
  npx supabase link --project-ref xxx
  ```
- [ ] Crear schema (migración):
  ```sql
  -- users table
  CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    stripe_customer_id VARCHAR(255) UNIQUE,
    stripe_subscription_id VARCHAR(255),
    plan_id VARCHAR(50),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
  );

  -- assistants table
  CREATE TABLE assistants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    emoji VARCHAR(10),
    vibe TEXT,
    status VARCHAR(50) DEFAULT 'configuring',
    railway_deployment_id VARCHAR(255),
    railway_url VARCHAR(255),
    config JSONB,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
  );

  -- channels table
  CREATE TABLE channels (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    assistant_id UUID REFERENCES assistants(id) ON DELETE CASCADE,
    type VARCHAR(50) NOT NULL,
    token TEXT, -- Encriptado
    webhook_url VARCHAR(255),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT NOW()
  );
  ```
- [ ] Aplicar migración:
  ```bash
  npx supabase db push
  ```
- [ ] Cliente de Supabase:
  ```typescript
  // lib/supabase.ts
  import { createClient } from '@supabase/supabase-js';
  export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  ```
- [ ] Funciones helper:
  ```typescript
  // lib/db/users.ts
  export async function createUser(email: string, stripeCustomerId: string)
  export async function getUserByEmail(email: string)
  export async function updateUserSubscription(userId: string, data: {...})
  ```
- [ ] Actualizar webhook de Stripe para usar Supabase

**Criterios de éxito:**
- ✅ Base de datos creada en Supabase
- ✅ Schema aplicado correctamente
- ✅ Cliente de Supabase funciona
- ✅ CRUD básico de usuarios funciona
- ✅ Webhook guarda datos en Supabase

**Variables de entorno adicionales:**
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx
SUPABASE_SERVICE_ROLE_KEY=eyJxxx (para server-side)
```

---

### **FASE 5: Configurador Simplificado** ⏱️ 3-4 días

#### Día 9-10: Steps 1 y 2 (Canal Selection y Conexión)
**Archivos a crear:**
- `app/onboarding/setup/page.tsx`
- `components/onboarding/OnboardingLayout.tsx`
- `components/onboarding/StepChannelSelection.tsx`
- `components/onboarding/StepConnectChannel.tsx`
- `components/onboarding/TelegramSetupGuide.tsx`
- `components/onboarding/ProgressBar.tsx`
- `lib/onboarding-context.tsx`

**Tareas específicas:**
- [ ] Context para onboarding:
  ```typescript
  interface OnboardingState {
    userId: string;
    planId: string;
    step: number;
    selectedChannel: 'telegram' | 'whatsapp' | 'discord';
    channelToken: string;
    assistantName: string;
    assistantEmoji: string;
    assistantTone: string;
  }
  ```
- [ ] Layout de onboarding:
  - Header con logo
  - Progress bar (4 pasos)
  - Botones Next/Back
  - Auto-save de progreso
- [ ] **Paso 1: Selección de canal**
  - Cards grandes con iconos
  - Telegram (recomendado)
  - WhatsApp (requiere plan Pro+)
  - Discord (requiere plan Pro+)
  - Validación de plan
  - Botón "Continuar"
- [ ] **Paso 2: Conectar canal**
  - Tutorial visual paso a paso
  - Para Telegram:
    1. Video/GIF mostrando @BotFather
    2. Lista ordenada de pasos
    3. Input para pegar token
    4. Botón "Verificar token"
    5. Validación real con Telegram API
  - Para WhatsApp:
    - Link a WhatsApp Business API
    - Guía simplificada
  - Loading states
  - Error handling con mensajes claros

**Criterios de éxito:**
- ✅ Usuario puede seleccionar canal
- ✅ Validación de plan funciona
- ✅ Tutorial es claro y visual
- ✅ Validación de token funciona
- ✅ Progress se guarda en cada paso

---

#### Día 11: Step 3 (Personalización)
**Archivos a crear:**
- `components/onboarding/StepPersonalize.tsx`
- `components/onboarding/EmojiPicker.tsx`
- `components/onboarding/TonePicker.tsx`

**Tareas específicas:**
- [ ] **Paso 3: Personalización**
  - Input de nombre:
    - Label: "¿Cómo quieres llamar a tu asistente?"
    - Placeholder: "Ej: Alex, María, Mi Asistente..."
    - Default: "JARVIS"
    - Validación: 2-50 caracteres
  - Selector de emoji:
    - Opciones: 🤖, 🧠, ⚡, 📈, 🛠️, 💼, 🎯, 🌟
    - Grid visual
    - Hover effect
  - Selector de tono:
    - Radio buttons grandes
    - Opciones:
      - "Formal" → "Profesional y cortés"
      - "Casual" → "Amigable y relajado"
      - "Divertido" → "Con sentido del humor"
      - "Técnico" → "Directo y preciso"
    - Descripción de cada tono
  - Preview en vivo:
    - Mensaje de ejemplo con el tono seleccionado
    - Muestra emoji + nombre
- [ ] Validación del formulario
- [ ] Guardar en context y DB

**Criterios de éxito:**
- ✅ Nombre se valida correctamente
- ✅ Selección visual es intuitiva
- ✅ Preview funciona en tiempo real
- ✅ Datos se guardan

---

#### Día 12: Step 4 (Deploy Automático)
**Archivos a crear:**
- `components/onboarding/StepDeploy.tsx`
- `components/onboarding/DeployProgress.tsx`
- `app/api/deploy/route.ts`
- `lib/railway-deploy.ts` (básico por ahora)

**Tareas específicas:**
- [ ] **Paso 4: Confirmación y Deploy**
  - Resumen de configuración:
    - Canal elegido
    - Nombre y emoji del asistente
    - Tono seleccionado
  - Botón "Crear mi asistente"
  - Al hacer click:
    1. Mostrar loading con pasos:
       - "Creando tu asistente..."
       - "Configurando inteligencia IA..."
       - "Conectando con [canal]..."
       - "Haciendo pruebas finales..."
       - "¡Listo para usar!"
    2. Llamar a `/api/deploy`:
       ```typescript
       POST /api/deploy
       Body: {
         userId: string,
         assistantId: string,
         config: OnboardingState
       }
       ```
    3. Backend (por ahora simplificado):
       - Guardar config en DB
       - TODO: Deploy real a Railway (FASE 6)
       - Marcar asistente como "active"
    4. Polling cada 2s para check de status
    5. Cuando status === 'active' → siguiente paso

**Por ahora (sin Railway):**
- [ ] Simular deploy con timeout de 10s
- [ ] Guardar config completa en DB
- [ ] Status: configuring → active

**Criterios de éxito:**
- ✅ Resumen muestra toda la info
- ✅ Loading progress es visual y claro
- ✅ Config se guarda en DB
- ✅ Transición a página de éxito

---

### **FASE 6: Deploy Automático a Railway** ⏱️ 3-4 días

#### Día 13-14: Integración con Railway API
**Archivos a crear/modificar:**
- `lib/railway-deploy.ts` (implementación completa)
- `lib/railway-api.ts`
- Actualizar `app/api/deploy/route.ts`

**Tareas previas:**
- [ ] Crear cuenta en Railway
- [ ] Obtener API token de Railway
- [ ] Crear template base de OpenClaw en Railway (si no existe)

**Tareas específicas:**
- [ ] Investigar Railway GraphQL API:
  ```graphql
  mutation ProjectCreate {
    projectCreate(input: { name: "skillia-xxx" }) {
      id
      name
    }
  }
  ```
- [ ] Implementar funciones:
  ```typescript
  // lib/railway-api.ts
  export async function createProject(name: string)
  export async function setEnvironmentVariables(projectId: string, vars: Record<string, string>)
  export async function deployFromGithub(projectId: string, repo: string)
  export async function getDeploymentStatus(deploymentId: string)
  export async function getProjectDomain(projectId: string)
  ```
- [ ] Función principal de deploy:
  ```typescript
  // lib/railway-deploy.ts
  export async function deployAssistantToRailway(config: DeployConfig) {
    // 1. Crear proyecto
    const project = await createProject(`skillia-${assistantId}`);

    // 2. Configurar variables de entorno
    const envVars = {
      ANTHROPIC_API_KEY: getSharedApiKey(), // Pool compartido
      TELEGRAM_BOT_TOKEN: config.channelToken,
      ASSISTANT_NAME: config.name,
      ASSISTANT_EMOJI: config.emoji,
      ALLOWLIST: config.userId, // Solo el dueño
      // ... más vars según plan
    };
    await setEnvironmentVariables(project.id, envVars);

    // 3. Deploy desde template/repo
    const deployment = await deployFromGithub(
      project.id,
      'https://github.com/openclaw/openclaw'
    );

    // 4. Esperar a que esté ready
    await waitForDeployment(deployment.id);

    // 5. Obtener URL pública
    const domain = await getProjectDomain(project.id);

    // 6. Configurar webhook del canal
    await configureChannelWebhook(config.channelType, config.channelToken, domain);

    return {
      projectId: project.id,
      deploymentId: deployment.id,
      url: `https://${domain}`
    };
  }
  ```
- [ ] Gestión de API keys compartidas:
  ```typescript
  // lib/shared-api-keys.ts
  // Pool de API keys de Anthropic/OpenAI
  // Rotación automática
  // Rate limiting por usuario
  ```
- [ ] Webhook configuration:
  ```typescript
  // lib/channel-webhooks.ts
  export async function configureTelegramWebhook(token: string, url: string)
  export async function configureDiscordWebhook(token: string, url: string)
  // WhatsApp requiere setup diferente
  ```
- [ ] Actualizar `/api/deploy` para usar Railway
- [ ] Guardar deployment info en DB:
  ```typescript
  await supabase
    .from('assistants')
    .update({
      railway_deployment_id: deployment.id,
      railway_url: deploymentUrl,
      status: 'active'
    })
    .eq('id', assistantId);
  ```

**Criterios de éxito:**
- ✅ Proyecto se crea en Railway
- ✅ Variables de entorno se configuran
- ✅ Deploy se ejecuta correctamente
- ✅ Webhook del canal se configura
- ✅ Asistente responde al primer mensaje

**Variables de entorno adicionales:**
```env
RAILWAY_API_TOKEN=xxx
RAILWAY_TEMPLATE_ID=xxx (si usas template)
SHARED_ANTHROPIC_API_KEY=sk-ant-xxx
SHARED_OPENAI_API_KEY=sk-xxx
```

---

#### Día 15: Testing y Error Handling
**Tareas específicas:**
- [ ] Manejo de errores en deploy:
  - Railway API down → retry con backoff
  - Deployment failed → rollback y notificar
  - Webhook config failed → reintentar
- [ ] Logs detallados de deploy:
  ```typescript
  await supabase.from('deployment_logs').insert({
    assistant_id: assistantId,
    step: 'railway_project_create',
    status: 'success',
    details: {...}
  });
  ```
- [ ] Health check del asistente:
  ```typescript
  async function checkAssistantHealth(url: string) {
    const response = await fetch(`${url}/health`);
    return response.ok;
  }
  ```
- [ ] Tests end-to-end:
  - Usuario completa onboarding
  - Deploy se ejecuta
  - Asistente responde en Telegram
- [ ] Página de error si deploy falla:
  - Mensaje claro
  - Botón "Reintentar"
  - Link a soporte

**Criterios de éxito:**
- ✅ Errores se manejan gracefully
- ✅ Logs ayudan a debug
- ✅ Usuario puede reintentar si falla
- ✅ Test completo funciona

---

### **FASE 7: Página de Éxito y Onboarding** ⏱️ 1 día

#### Día 16: Success Page
**Archivos a crear:**
- `app/onboarding/success/page.tsx`
- `components/onboarding/SuccessAnimation.tsx`
- `components/onboarding/QuickStartGuide.tsx`
- `components/onboarding/QRCodeGenerator.tsx`

**Tareas específicas:**
- [ ] **Página de éxito:**
  - Animación de celebración (confetti o similar)
  - Mensaje: "🎉 ¡Tu asistente está listo!"
  - Info del asistente:
    - Nombre y emoji
    - Canal conectado
    - URL/QR para empezar a chatear
  - **Para Telegram:**
    - QR code con link `https://t.me/{botUsername}`
    - Botón "Abrir Telegram"
  - **Para WhatsApp:**
    - QR code de WhatsApp
    - Instrucciones
  - **Para Discord:**
    - Link de invitación al bot
    - Instrucciones
  - Tutorial rápido:
    - "Envía 'Hola' para empezar"
    - "Prueba: '¿Qué tiempo hace?'"
    - "Pregunta: 'Ayuda' para ver comandos"
  - CTAs:
    - "Ir al Dashboard" (primario)
    - "Ver tutorial completo" (secundario)
    - "Invitar a amigos" (con link de referido)
- [ ] Generar QR code:
  ```typescript
  import QRCode from 'qrcode';
  const qrUrl = await QRCode.toDataURL(telegramLink);
  ```
- [ ] Instalar dependencia:
  ```bash
  npm install qrcode @types/qrcode
  ```

**Criterios de éxito:**
- ✅ Página celebra el logro
- ✅ QR/link funciona correctamente
- ✅ Tutorial es claro
- ✅ CTAs son obvios

---

### **FASE 8: Dashboard del Usuario** ⏱️ 3-4 días

#### Día 17-18: Dashboard Principal
**Archivos a crear:**
- `app/dashboard/page.tsx`
- `app/dashboard/layout.tsx`
- `components/dashboard/Sidebar.tsx`
- `components/dashboard/AssistantStatusCard.tsx`
- `components/dashboard/UsageStats.tsx`
- `components/dashboard/QuickActions.tsx`
- `lib/auth-context.tsx`

**Tareas específicas:**
- [ ] **Autenticación simple (básica por ahora):**
  ```typescript
  // Por ahora: Session based en Supabase
  // Verificar que user_id del pago existe
  // TODO: Auth completo con Supabase Auth en v2
  ```
- [ ] **Layout del dashboard:**
  - Sidebar con navegación:
    - Overview (home)
    - Channels
    - Settings
    - Billing
    - Support
  - Header con:
    - Logo
    - Nombre del usuario
    - Dropdown de cuenta
- [ ] **Vista Overview:**
  - Card de estado del asistente:
    - Status: 🟢 Activo / 🟡 Configurando / 🔴 Error
    - Uptime
    - Último mensaje recibido
    - Botones:
      - "Pausar asistente"
      - "Reiniciar"
      - "Ver logs"
  - Estadísticas de uso (si plan permite):
    - Mensajes este mes: X / límite
    - Gráfico de uso semanal
    - Canales activos
  - Quick actions:
    - "Probar asistente" → Abre canal
    - "Editar personalidad"
    - "Añadir canal" (si plan permite)

**Criterios de éxito:**
- ✅ Dashboard carga datos del usuario
- ✅ Status del asistente se muestra correctamente
- ✅ Navegación funciona
- ✅ Mobile responsive

---

#### Día 19: Gestión de Canales y Settings
**Archivos a crear:**
- `app/dashboard/channels/page.tsx`
- `app/dashboard/settings/page.tsx`
- `components/dashboard/ChannelCard.tsx`
- `components/dashboard/AddChannelModal.tsx`
- `components/dashboard/SettingsForm.tsx`

**Tareas específicas:**
- [ ] **Página de Channels:**
  - Lista de canales conectados
  - Para cada canal:
    - Tipo (Telegram/WhatsApp/Discord)
    - Status (activo/inactivo)
    - Fecha de conexión
    - Botones:
      - "Probar" → Envía mensaje de test
      - "Desconectar"
  - Botón "Añadir canal" (si plan permite):
    - Modal con mismo flow de onboarding
    - Validación de plan
    - Configuración de webhook
- [ ] **Página de Settings:**
  - Editar personalidad:
    - Nombre
    - Emoji
    - Tono/Vibe
  - Allowlist management:
    - Lista de usuarios permitidos
    - Añadir/eliminar
  - Configuración de skills (si plan Pro+):
    - Activar/desactivar skills
  - Botón "Guardar cambios":
    - Update en DB
    - Trigger redeploy si es necesario
- [ ] API endpoints:
  ```typescript
  POST /api/channels/add
  DELETE /api/channels/:id
  PATCH /api/assistant/settings
  ```

**Criterios de éxito:**
- ✅ Usuario puede ver sus canales
- ✅ Puede añadir canal si plan permite
- ✅ Settings se actualizan correctamente
- ✅ Cambios se reflejan en el asistente

---

#### Día 20: Billing y Facturación
**Archivos a crear:**
- `app/dashboard/billing/page.tsx`
- `components/dashboard/CurrentPlanCard.tsx`
- `components/dashboard/InvoiceList.tsx`
- `components/dashboard/UpgradeModal.tsx`
- `app/api/billing/portal/route.ts`

**Tareas específicas:**
- [ ] **Página de Billing:**
  - Card de plan actual:
    - Nombre del plan
    - Precio (€X.XX/mes o /año)
    - Próximo pago: [fecha]
    - Botones:
      - "Cambiar plan"
      - "Cancelar suscripción"
      - "Actualizar método de pago"
  - Historial de facturas:
    - Tabla con:
      - Fecha
      - Concepto
      - Monto
      - Status (pagado/pendiente/fallido)
      - Descargar PDF
  - Uso del plan:
    - Progress bar de límites
    - "Mensajes: 1,234 / 10,000"
    - Recomendación de upgrade si cerca del límite
- [ ] **Stripe Customer Portal:**
  ```typescript
  // app/api/billing/portal/route.ts
  export async function POST(req: Request) {
    const { customerId } = await req.json();

    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${process.env.NEXT_PUBLIC_URL}/dashboard/billing`
    });

    return Response.json({ url: session.url });
  }
  ```
  - Permite al usuario:
    - Actualizar método de pago
    - Ver facturas
    - Cancelar suscripción
- [ ] **Upgrade/Downgrade:**
  - Modal para cambiar plan
  - Llamada a Stripe para update subscription
  - Recalcular proration
  - Confirmación
- [ ] **Cancelación:**
  - Modal de confirmación
  - Opción de feedback: "¿Por qué cancelas?"
  - Cancelar al final del período (no inmediato)
  - Email de confirmación

**Criterios de éxito:**
- ✅ Plan actual se muestra correctamente
- ✅ Usuario puede acceder a customer portal
- ✅ Upgrade/downgrade funciona
- ✅ Cancelación funciona pero mantiene hasta fin de período

---

### **FASE 9: Testing y Optimización** ⏱️ 2 días

#### Día 21: Testing End-to-End
**Tareas específicas:**
- [ ] **Test del flujo completo:**
  1. Usuario llega a landing
  2. Click en "Ver planes"
  3. Selecciona plan Pro
  4. Paga con Stripe (test card)
  5. Redirigido a onboarding
  6. Completa 4 pasos
  7. Asistente se despliega en Railway
  8. Webhook se configura
  9. Usuario envía mensaje en Telegram
  10. Asistente responde
  11. Usuario accede al dashboard
  12. Edita settings
  13. Cambios se reflejan
- [ ] **Test de casos edge:**
  - Pago fallido
  - Deploy fallido (retry funciona?)
  - Token inválido de Telegram
  - Usuario cancela en medio del onboarding
  - Usuario cierra ventana durante deploy
  - Plan gratuito intenta añadir 2do canal
- [ ] **Test de performance:**
  - Lighthouse score > 90
  - Time to First Byte < 500ms
  - Deploy time < 2 minutos
  - Dashboard carga < 1s
- [ ] **Test en diferentes dispositivos:**
  - Desktop (Chrome, Firefox, Safari)
  - Mobile (iOS Safari, Android Chrome)
  - Tablet
- [ ] **Logs y monitoring:**
  - Configurar error tracking (Sentry?)
  - Log de deploy steps
  - Alertas si deploy falla

**Criterios de éxito:**
- ✅ Flujo completo funciona sin errores
- ✅ Casos edge se manejan bien
- ✅ Performance es aceptable
- ✅ Funciona en todos los dispositivos

---

#### Día 22: Optimización y Polish
**Tareas específicas:**
- [ ] **Optimización de performance:**
  - Code splitting por ruta
  - Lazy loading de componentes pesados
  - Optimizar imágenes (next/image)
  - Minificar CSS/JS
  - Caché de API responses
- [ ] **SEO:**
  - Meta tags en todas las páginas
  - Sitemap.xml
  - Robots.txt
  - Schema.org markup para pricing
  - Open Graph images
- [ ] **Accesibilidad:**
  - Todos los botones tienen aria-labels
  - Navegación con teclado funciona
  - Alto contraste para texto
  - Skip links
- [ ] **UX polish:**
  - Animaciones suaves
  - Loading skeletons
  - Empty states
  - Error states con ilustraciones
  - Microinteracciones
- [ ] **Copy review:**
  - Revisar todos los textos
  - Corregir typos
  - Asegurar tono consistente
  - Simplificar jerga técnica

**Criterios de éxito:**
- ✅ Lighthouse: Performance > 90, A11y > 95
- ✅ Navegación es fluida
- ✅ Copy es claro y consistente
- ✅ Experiencia se siente pulida

---

### **FASE 10: Documentación y Lanzamiento** ⏱️ 1 día

#### Día 23: Documentación
**Archivos a crear:**
- `docs/USER_GUIDE.md`
- `docs/API.md`
- `docs/DEPLOYMENT.md`
- `docs/TROUBLESHOOTING.md`

**Tareas específicas:**
- [ ] **Guía de usuario:**
  - Cómo crear cuenta
  - Cómo configurar primer asistente
  - Cómo usar cada canal
  - Comandos disponibles
  - FAQ extendida
- [ ] **Documentación técnica:**
  - Arquitectura del sistema
  - API endpoints documentados
  - Variables de entorno
  - Proceso de deploy
- [ ] **Troubleshooting:**
  - Problemas comunes y soluciones
  - "Asistente no responde"
  - "Pago no procesado"
  - "Deploy falló"
- [ ] **Actualizar README principal:**
  - Reflejar nuevo producto
  - Stack tecnológico
  - Instrucciones de setup para desarrollo
- [ ] **Legal básico:**
  - Términos de servicio (usar template)
  - Política de privacidad (GDPR compliant)
  - Política de cookies

**Criterios de éxito:**
- ✅ Usuario puede auto-servirse con docs
- ✅ Desarrolladores pueden contribuir
- ✅ Legal cubre lo básico

---

## 📦 Entregables Finales

Al final del Sprint 3 tendremos:

### Frontend:
✅ Landing page comercial completa
✅ Página de pricing con 3 planes
✅ Flujo de onboarding (4 pasos)
✅ Página de éxito con QR/tutorial
✅ Dashboard completo (overview, channels, settings, billing)

### Backend:
✅ Integración completa con Stripe (checkout + webhooks)
✅ Base de datos en Supabase (users, assistants, channels)
✅ API para deploy automático a Railway
✅ Gestión de webhooks de canales
✅ Sistema de billing con customer portal

### Infrastructure:
✅ Deploy automático a Railway funcionando
✅ Pool de API keys compartidas
✅ Webhooks configurados automáticamente
✅ Health checks y monitoring

### Extras:
✅ Documentación completa
✅ Tests end-to-end
✅ Legal básico (términos, privacidad)
✅ Performance optimizada

---

## 🎯 Métricas de Éxito del Sprint

| Métrica | Objetivo |
|---------|----------|
| **Time to First Message** | < 10 minutos |
| **Conversion Landing → Pricing** | > 30% |
| **Conversion Pricing → Checkout** | > 15% |
| **Checkout → Pago completado** | > 60% |
| **Pago → Asistente activo** | > 85% |
| **Deploy success rate** | > 95% |
| **Lighthouse Performance** | > 90 |
| **Mobile usability** | 100% funcional |

---

## 🚧 Riesgos y Mitigaciones

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| Railway API tiene limitaciones | Media | Alto | Investigar bien la API primero, tener plan B (Render) |
| Pool de API keys se agota | Media | Medio | Implementar rate limiting, alertas de uso |
| Deploy toma más de 2 min | Alta | Bajo | Optimizar template, considerar pre-warming |
| Stripe webhooks fallan | Baja | Alto | Retry logic robusto, fallback a polling |
| Usuario abandona durante onboarding | Alta | Medio | Auto-save, email de recordatorio, simplificar pasos |

---

## 📅 Calendario Sugerido

**Semana 1 (Días 1-5):**
- Landing page completa
- Pricing page
- Integración Stripe básica

**Semana 2 (Días 6-10):**
- Webhooks de Stripe
- Setup Supabase
- Onboarding steps 1-2

**Semana 3 (Días 11-16):**
- Onboarding steps 3-4
- Deploy automático a Railway
- Success page

**Semana 4 (Días 17-23):**
- Dashboard completo
- Billing
- Testing y optimización
- Documentación

---

## ✅ Checklist de Inicio

Antes de empezar el desarrollo:

- [ ] Stripe account creada (test mode)
- [ ] Productos configurados en Stripe
- [ ] Supabase project creado
- [ ] Railway account con API token
- [ ] Repo de OpenClaw accesible
- [ ] Variables de entorno definidas
- [ ] Plan de contenido para landing (textos, imágenes)
- [ ] Decisión sobre nombre definitivo (Skillia confirmado)

---

## 🎬 Próximo Paso

**AHORA:** Empezar con Fase 1, Día 1 → Hero Section de la landing

**Comando:**
```bash
# Crear branch para desarrollo
git checkout -b feat/landing-page-commercial

# Empezar desarrollo
```

---

**¿Listo para empezar?** 🚀

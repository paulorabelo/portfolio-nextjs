# 🌐 Portfolio Next.js — Site Pessoal do Paulo Rabelo

![License](https://img.shields.io/badge/license-MIT-green)
![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel)
![Status](https://img.shields.io/badge/status-Em%20Desenvolvimento-yellow)

> **Portfólio pessoal moderno** construído com **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS 4** e **TypeScript 5**. Deploy contínuo na Vercel.

## 🎯 Sobre o Projeto

Este é o código-fonte do meu **portfólio profissional online** — uma vitrine dos meus projetos, artigos técnicos, experiência e formas de contato. Projetado com foco em:

- ⚡ **Performance** — Next.js App Router + Server Components
- 🎨 **Design System** — Tailwind CSS 4 + CSS Variables (tema dark/light)
- ♿ **Acessibilidade** — HTML semântico, ARIA, contraste, navegação por teclado
- 🌍 **SEO Otimizado** — Meta tags, Open Graph, sitemap, JSON-LD
- 📱 **Mobile First** — Responsivo em todos os breakpoints

## 🖥️ Live Demo

**🔗 [paulorabelo.dev.br](https://paulorabelo.dev.br)**

## 🛠️ Stack Tecnológica

| Categoria | Tecnologia | Versão | Destaque |
|-----------|------------|--------|----------|
| **Framework** | Next.js | 16.1.1 | App Router, RSC, Turbopack |
| **UI Library** | React | 19.2.3 | Server Components, Actions |
| **Linguagem** | TypeScript | 5 | Strict mode, tipagem completa |
| **Styling** | Tailwind CSS | 4 | CSS-first config, OKLCH colors |
| **Fontes** | next/font | — | Geist (otimizado, auto-hosted) |
| **Linting** | ESLint | 9 | Flat config, Next.js rules |
| **Build** | Turbopack | — | Fast refresh, incremental |
| **Deploy** | Vercel | — | Edge Functions, Analytics |

## 📁 Estrutura do Projeto

```
portfolio-nextjs/
├── public/                 # Assets estáticos (favicon, imagens)
├── src/
│   ├── app/                # 📱 App Router (Next.js 13+)
│   │   ├── layout.tsx      # Layout raiz + providers + metadata
│   │   ├── page.tsx        # Home page (Server Component)
│   │   ├── globals.css     # Tailwind v4 + CSS Variables
│   │   └── (rotas)/        # Páginas: /sobre, /projetos, /blog, /contato
│   │
│   ├── components/
│   │   ├── sections/       # 🧩 Seções da página
│   │   │   ├── Home.tsx         # Hero + CTA
│   │   │   ├── About.tsx        # Sobre mim + skills
│   │   │   ├── Portfolio.tsx    # Grid de projetos
│   │   │   ├── Blogs.tsx        # Últimos artigos
│   │   │   └── Contact.tsx      # Formulário + links
│   │   │
│   │   └── Header.tsx      # Navigation + Theme Toggle
│   │
│   └── lib/                # 🔧 Utilitários (utils, constants)
│
├── .github/workflows/      # CI/CD (opcional)
├── next.config.ts          # Config Next.js
├── tsconfig.json           # TypeScript strict
├── tailwind.config.ts      # Tailwind v4 (CSS-first)
├── postcss.config.mjs      # PostCSS plugins
├── eslint.config.mjs       # ESLint 9 flat config
└── package.json
```

## 🚀 Como Executar Localmente

### Pré-requisitos
- **Node.js** 20+ (LTS recomendado)
- **pnpm** 9+ (`npm install -g pnpm` ou `corepack enable pnpm`)

### Instalação
```bash
# 1. Clone
git clone https://github.com/paulorabelo/portfolio-nextjs.git
cd portfolio-nextjs

# 2. Instale dependências
pnpm install

# 3. Desenvolvimento (Turbopack habilitado por padrão no Next 15+)
pnpm dev

# 4. Acesse http://localhost:3000
```

### Scripts Disponíveis
```bash
pnpm dev        # Dev server com Turbopack (hot reload)
pnpm build      # Build de produção (otimizado)
pnpm start      # Servidor de produção
pnpm lint       # ESLint 9 (flat config)
pnpm type-check # tsc --noEmit (verificação de tipos)
```

## 🎨 Temas & Personalização

### CSS Variables (globals.css)
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  /* ... mais variáveis */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... */
}
```

### Alternância de Tema
O `Header.tsx` inclui um **Theme Toggle** que:
- Persiste preferência no `localStorage`
- Respeita `prefers-color-scheme` do sistema
- Aplica classe `.dark` no `<html>`

## 📝 Seções do Portfólio

| Seção | Componente | Descrição |
|-------|------------|-----------|
| **Hero** | `Home.tsx` | Apresentação, CTA, links sociais |
| **Sobre** | `About.tsx` | Bio, stack tecnológico, experiência |
| **Projetos** | `Portfolio.tsx` | Grid responsivo com cards de projetos |
| **Blog** | `Blogs.tsx` | Últimos posts (integração futura com CMS) |
| **Contato** | `Contact.tsx` | Formulário (EmailJS) + links diretos |

## 🔧 Configurações Importantes

### next.config.ts
```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.githubusercontent.com' },
      { protocol: 'https', hostname: '**.vercel.app' },
    ],
  },
  // experimental: { turbo: {} }, // Turbopack estável no Next 15+
}

export default nextConfig
```

### tsconfig.json (Strict Mode)
```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

## 📦 Deploy na Vercel

### Opção 1: Vercel CLI (Rápido)
```bash
pnpm i -g vercel
vercel login
vercel --prod
```

### Opção 2: Git Integration (Recomendado)
1. Push para GitHub
2. Conecte repo no [Vercel Dashboard](https://vercel.com/new)
3. **Framework Preset**: Next.js (auto-detectado)
4. **Root Directory**: `./` (raiz)
5. **Build Command**: `pnpm build` (padrão)
6. **Output Directory**: `.next` (padrão)
7. **Environment Variables**: Adicione se necessário
8. Deploy! 🚀

### Variáveis de Ambiente (Vercel)
```env
NEXT_PUBLIC_SITE_URL=https://paulorabelo.dev.br
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Google Analytics (opcional)
EMAILJS_SERVICE_ID=...          # Para formulário de contato
EMAILJS_TEMPLATE_ID=...
EMAILJS_PUBLIC_KEY=...
```

## 🧪 Qualidade de Código

```bash
# Lint
pnpm lint

# Type Check
pnpm type-check

# Build Test (simula produção)
pnpm build && pnpm start
```

## 🔮 Roadmap / Melhorias Planejadas

- [ ] **CMS Headless** para blog (Contentlayer / Sanity / Notion API)
- [ ] **MDX Support** para posts técnicos com componentes React
- [ ] **Analytics** (Vercel Analytics + Plausible/Umami)
- [ ] **PWA** — Service Worker, Manifest, Offline
- [ ] **i18n** — PT-BR / EN / ES (next-intl)
- [ ] **Testes** — Vitest (unit) + Playwright (e2e)
- [ ] **Component Library** — Storybook para UI components
- [ ] **Dark Mode Aprimorado** — Múltiplos temas (corporate, high-contrast)
- [ ] **Performance** — Image optimization, font subsetting, preload

## 🤝 Contribuindo

Como este é um **portfólio pessoal**, contribuições externas não são o foco principal. No entanto:

- 🐛 **Bug Reports**: Issues com reprodução
- ✨ **Sugestões UX/UI**: Acessibilidade, design, performance
- 📝 **Correções**: Typos, links quebrados, info desatualizada
- 🌍 **Traduções**: Conteúdo em inglês/espanhol

### Como Contribuir
```bash
# 1. Fork
# 2. Branch: git checkout -b feature/melhoria
# 3. Commit: git commit -m 'feat: descrição'
# 4. Push: git push origin feature/melhoria
# 5. Pull Request
```

## 📄 Licença

**MIT License** — Veja [LICENSE](LICENSE).

## 👨‍💻 Autor

**Paulo Rabelo**
- 🌐 **Portfólio**: [paulorabelo.dev.br](https://paulorabelo.dev.br)
- 📝 **Blog**: [blog.paulorabelo.dev.com.br](https://blog.paulorabelo.dev.com.br)
- 💼 **LinkedIn**: [linkedin.com/in/paulorabelooficial](https://www.linkedin.com/in/paulorabelooficial/)
- 🐙 **GitHub**: [@paulorabelo](https://github.com/paulorabelo)
- 🏢 **MRGSoft**: [mrgsoft.com.br](https://mrgsoft.com.br)

---

<div align="center">
  <sub>Construído com Next.js 16, React 19 e muito ☕</sub><br>
  <sub><a href="https://github.com/paulorabelo/portfolio-nextjs">⭐ Star se gostou do design!</a></sub>
</div>
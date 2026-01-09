# Cloudflare React + Workers Starter Template

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Vishnuvaradhan-M/elite-ai-engineer-portfolio-vishnuvaradhan-m)

A production-ready full-stack starter template for Cloudflare Workers and Pages. Features a modern React frontend with shadcn/ui components, Tailwind CSS, and a Hono-powered Worker backend. Perfect for building performant, edge-deployed web applications.

## ✨ Features

- **Full-Stack Ready**: React 18 + Vite frontend with Cloudflare Worker backend using Hono.
- **Modern UI**: shadcn/ui components, Tailwind CSS with custom design system, dark mode support.
- **TypeScript Everywhere**: End-to-end type safety including Worker bindings.
- **State Management**: Tanstack Query, Zustand, Immer.
- **Developer Experience**: Hot reload, error boundaries, theme toggle, mobile-responsive.
- **Edge Deployment**: Optimized for Cloudflare Workers/Pages with SPA routing.
- **Customizable**: Sidebar layout, API routes in `worker/userRoutes.ts`, easy component extension.
- **Production Features**: CORS, logging, health checks, client error reporting.

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui, Lucide icons, Framer Motion, Sonner toasts, React Router.
- **Backend**: Hono, Cloudflare Workers, Workers KV/DO ready.
- **Data/UI**: Tanstack Query, React Hook Form, Zod validation, Recharts.
- **Utilities**: clsx, tailwind-merge, class-variance-authority, uuid.
- **Build/Tools**: Bun, Wrangler, ESLint, TypeScript 5.

## 🚀 Quick Start

1. **Clone & Install**:
   ```bash
   git clone <your-repo-url>
   cd <project-name>
   bun install
   ```

2. **Generate Worker Types** (one-time):
   ```bash
   bun run cf-typegen
   ```

3. **Development**:
   ```bash
   bun dev
   ```
   Opens at `http://localhost:3000` (or `$PORT`).

## 💻 Development

- **Frontend**: Edit `src/` files. Vite handles HMR.
- **Backend Routes**: Add API endpoints in `worker/userRoutes.ts`. Auto-reloads in dev.
- **Custom Styling**: Extend `tailwind.config.js` and `src/index.css`.
- **New Pages**: Update `src/main.tsx` router.
- **Components**: Use shadcn/ui from `@/components/ui/*`. Add via `npx shadcn-ui@latest add <component>`.
- **Linting**: `bun lint`
- **Preview**: `bun preview`

### Project Structure
```
├── src/              # React app
│   ├── components/   # UI components & shadcn/ui
│   ├── hooks/        # Custom hooks
│   ├── lib/          # Utilities
│   └── pages/        # Page components
├── worker/           # Cloudflare Worker (Hono)
└── ...               # Configs (Vite, Tailwind, Wrangler)
```

## 🔧 Customization

- **Theme**: Uses CSS variables. Toggle via `useTheme()` hook.
- **Sidebar**: Edit `src/components/app-sidebar.tsx` or remove from layout.
- **API**: Extend `worker/userRoutes.ts`. Core handlers in `worker/index.ts` (do not modify).
- **Error Reporting**: Auto-reports client errors to `/api/client-errors`.

## 🚀 Deployment

Deploy to Cloudflare Workers/Pages in one command:

```bash
bun deploy
```

Requires Wrangler auth: `npx wrangler login`.

For custom domains or advanced config, edit `wrangler.jsonc`.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Vishnuvaradhan-M/elite-ai-engineer-portfolio-vishnuvaradhan-m)

## 🤝 Contributing

1. Fork & clone.
2. `bun install`
3. Make changes.
4. Test with `bun dev`.
5. PR to `main`.

## 📄 License

MIT. See [LICENSE](LICENSE) for details.

## 🙌 Support

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Hono](https://hono.dev/)

Built with ❤️ for the Cloudflare developer community.
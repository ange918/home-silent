# Hero Section (workspace)

Monorepo pnpm : application front **Hero Awwwards** dans `artifacts/hero-awwwards` (Vite + React).

## Prérequis

- Node.js 20+
- [pnpm](https://pnpm.io) (recommandé : `corepack enable` puis la version est imposée par le champ `packageManager` du `package.json` racine)

## Développement local

```bash
pnpm install
pnpm --filter @workspace/hero-awwwards dev
```

Build du site uniquement :

```bash
pnpm --filter @workspace/hero-awwwards run build
```

## Déploiement (Vercel)

La configuration est dans `vercel.json` à la racine :

- **Install :** `pnpm install`
- **Build :** `pnpm --filter @workspace/hero-awwwards run build`
- **Répertoire de sortie :** `artifacts/hero-awwwards/dist/public`
- **SPA :** réécritures vers `index.html` pour le routage côté client

Sur Vercel, lie le dépôt Git et laisse la **racine du projet** à la racine du repository (pas un sous-dossier seul), pour que le workspace pnpm et les paquets `lib/*` soient installés correctement.

### Images des projets

Les visuels sont servis depuis `artifacts/hero-awwwards/public/generated_images/` (chemins `/generated_images/*.png`). Remplace ces fichiers par tes exports haute définition : le dépôt n’utilise plus le dossier Replit `attached_assets/`, absent de Git et incompatible avec un build Vercel reproductible.

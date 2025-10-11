const Learning = () => {
    return (
        <>
            <h1>This is simple Learning about the vite build tool</h1>
            <p>
                🟢 Basic Vite Interview Questions

                What is Vite?
                → Explain it’s a modern frontend build tool for fast development and optimized production builds.

                Who created Vite?
                → Evan You (the creator of Vue.js).

                Why is Vite faster than Webpack?
                → Because it uses native ES modules in development and doesn’t need to bundle everything upfront.

                What does the word “Vite” mean?
                → “Vite” means “fast” in French.

                How do you create a Vite project?
                → Using npm create vite@latest or yarn create vite.

                What command starts the Vite development server?
                → npm run dev

                What is the default port for Vite’s dev server?
                → Port 5173

                How do you build a production-ready app in Vite?
                → npm run build

                What is HMR in Vite?
                → Hot Module Replacement — updates only the changed modules without a full reload.

                What types of projects can Vite support?
                → React, Vue, Svelte, Preact, Vanilla JS, and others.

                🟠 Intermediate Vite Interview Questions

                Explain Vite’s development workflow.
                → It serves code via native ESM; only compiles files on demand and caches results.

                How does Vite handle dependencies differently?
                → It pre-bundles dependencies with esbuild (written in Go), making it much faster.

                What role does Rollup play in Vite?
                → Vite uses Rollup internally for production builds to create optimized bundles.

                How can you customize the Vite config file?
                → By editing vite.config.js or vite.config.ts.

                What are Vite plugins?
                → They extend Vite’s functionality, similar to Rollup plugins.

                Where does Vite store build output by default?
                → In the dist/ directory.

                Can Vite work with TypeScript?
                → Yes, it has built-in support for TypeScript.

                What is the difference between Vite and CRA (Create React App)?
                → Vite is much faster in dev mode and uses Rollup instead of Webpack for production builds.

                How does Vite improve developer experience?
                → Instant server start, fast HMR, and minimal configuration.

                Can Vite be used with a backend framework (e.g., Laravel, Express)?
                → Yes, it can integrate with backend frameworks for frontend asset management.

                🔴 Advanced Vite Interview Questions

                Describe the Vite build process in production.
                → It bundles using Rollup, minifies JS/CSS, code-splits dynamically, and preloads assets.

                How does Vite optimize dependencies with esbuild?
                → It converts CommonJS and UMD modules into ESM using esbuild for faster loading.

                What’s the difference between esbuild and Rollup in Vite?
                → esbuild is used for dependency pre-bundling; Rollup is used for final production builds.

                How can you add environment variables in Vite?
                → Create .env files and access them using import.meta.env.

                Explain how Vite’s plugin system works.
                → It’s based on Rollup’s plugin API, but also supports dev-server-specific hooks.

                What are alias imports in Vite, and how do you configure them?
                → Use the resolve.alias option in vite.config.js.

                How does Vite handle CSS and assets?
                → CSS imports are handled natively; assets like images are optimized and hashed in production.

                What is SSR (Server-Side Rendering) in Vite?
                → Vite supports SSR where the app is rendered on the server before being sent to the client.

                How can you speed up large Vite builds?
                → Use caching, optimize dependencies, or lazy-load routes/components.

                Compare Vite vs Next.js / Webpack performance.
                → Vite is faster in dev mode due to ESM and esbuild, while Next.js focuses on SSR and routing.
            </p>
        </>
    )
}
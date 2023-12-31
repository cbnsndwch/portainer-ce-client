/// <reference types="vitest" />

import { defineConfig } from 'vite';

import pkg from './package.json';

/** @type {import('vite').UserConfigExport} */
export default defineConfig(({}) => {
    return {
        build: {
            lib: {
                formats: ['cjs', 'es'],
                entry: {
                    index: 'src/index.ts'
                },
                name: 'portainer-ce-client'
            },
            outDir: 'lib',
            emptyOutDir: false,
            sourcemap: true,
            rollupOptions: {
                external: [...Object.keys(pkg.peerDependencies)]
            }
        },
        test: {
            include: [
                './src/**/*.{test,spec}.ts',
                './src/**/*.{test,spec}-d.ts'
            ],
            globals: true,
            environment: 'happy-dom',
            environmentMatchGlobs: [
                ['**/*.test.ts', 'happy-dom'],
                ['**/*.spec.ts', 'node']
            ]
        }
    };
});

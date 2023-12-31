/**
 * Options for plugin `typedoc-plugin-extras`
 */
const pluginOptionsExtras = {
    // favicon: './docs/favicon.ico',
    footerLastModified: true
};

/**
 * @type {import('typedoc').TypeDocOptions}
 */
module.exports = {
    // ************************
    // Content
    // ************************
    name: 'Portainer CE Client',
    categorizeByGroup: true,
    includeVersion: true,
    resolveUtilityTypes: true,
    exclude: ['**/*.spec.ts', '**/*.test.ts'],

    // ************************
    // Input
    // ************************
    tsconfig: './tsconfig.docs.json',
    entryPoints: ['src/index.ts'],

    // ************************
    // Output
    // ************************
    out: './docs/reference',

    // ************************
    // Plugin Options
    // ************************
    plugin: ['typedoc-plugin-extras', 'typedoc-plugin-mdn-links'],
    ...pluginOptionsExtras
};

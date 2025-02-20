cypress.config.mjs
import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
    e2e: {
        async setupNodeEvents(on, config) {
            await addCucumberPreprocessorPlugin(on, config);
            on('file:preprocessor', createBundler({
                plugins: [createEsbuildPlugin(config)],
            }));
            return config;
        },
        specPattern: 'cypress/integration/**/*.feature',
        supportFile: 'cypress/support/e2e.js',
        baseUrl: process.env.CODESPACE_NAME ? 
            `https://${process.env.CODESPACE_NAME}-3000.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}` : 
            'http://localhost:3000',
    },
    video: false,
    chromeWebSecurity: false,
});
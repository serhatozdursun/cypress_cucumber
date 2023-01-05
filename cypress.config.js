const {defineConfig} = require('cypress');
const webpackPreprocessor = require('@cypress/webpack-preprocessor');
const {addCucumberPreprocessorPlugin} = require('@badeball/cypress-cucumber-preprocessor');

async function setupNodeEvents(on, config) {
    await addCucumberPreprocessorPlugin(on, config);

    const options = {
        baseUrl: "https://www.payflow.es/",
        webpackOptions: {
            module: {
                rules: [
                    {
                        test: /\.feature$/,
                        use: [
                            {
                                loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                                options: config,
                            },
                        ],
                    },
                ],
            },
        },

    };

    on('file:preprocessor', webpackPreprocessor(options));

    return config;
}

module.exports = {
    projectId: '3m6bme',
    default: defineConfig({
        e2e: {
            specPattern: '**/*.feature',
            supportFile: false,
            setupNodeEvents,
            baseUrl: "https://www.payflow.es/"
        },
    }),
    setupNodeEvents,
};

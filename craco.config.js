const path = require('path');
const CracoLessPlugin = require('craco-less');

const reslove = (name) => path.resolve(__dirname, name)

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        // modifyVars: { '@primary-color': '#1DA57A' },
                        modifyVars: {},
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    webpack: {
        alias: {
            "@": reslove("src"),
            "components": reslove("src/components"),
            "utils": reslove("src/utils"),
            '@mui/styled-engine': '@mui/styled-engine-sc'
        }
    }
}
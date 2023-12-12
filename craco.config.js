const path = require('path');
const CracoLessPlugin = require('craco-less');

const reslove = (name) => path.resolve(__dirname, name)

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
        },
    ],
    webpack: {
        alias: {
            "@": reslove("src"),
            "components": reslove("src/components"),
            "utils": reslove("src/utils")
        }
    }
}
module.exports = {
    pluginOptions: {
        electronBuilder: {
            chainWebpackMainProcess: config => {
                config.module
                    .rule("compile")
                    .test(/\.js$/)
                    .exclude.add(/(node_modules|dist_electron)/)
                    .end()
                    .use("babel")
                    .loader("babel-loader")
                    .options({
                        presets: ["@vue/cli-plugin-babel/preset"]
                    });
            }
        }
    }
};
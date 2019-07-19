const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
    filenameHashing: false,
    productionSourceMap: false,

    configureWebpack: () => {
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: [
                    new PrerenderSPAPlugin({
                        staticDir: path.join(__dirname, 'dist'),
                        indexPath: path.join(__dirname, 'dist', 'index.html'),
                        routes: [
                            "/",
                            "/pizza",
                            "/menu",
                            "/contacts",
                        ],
                        minify: {
                            collapseBooleanAttributes: true,
                            collapseWhitespace: true,
                            decodeEntities: true,
                            keepClosingSlash: true,
                            sortAttributes: true
                        },

                        postProcess (renderedRoute) {

                            if (renderedRoute.route !== "/") {

                                let parts = renderedRoute.route.split("/");

                                renderedRoute.outputPath = path.join(__dirname, 'dist', parts[1] + ".html");
                            }

                            return renderedRoute;
                        },
                        
                        renderer: new Renderer({
                            injectProperty: '__PRERENDER_INJECTED',
                            inject: {
                                isPrerender: true
                            },
                            renderAfterDocumentEvent: 'x-app-rendered',
                        })
                    })
                ],
            };
        }
    }
};

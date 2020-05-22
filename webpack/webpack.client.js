const path = require("path");

module.exports = function(env, argv) {
    return {
        "mode": process.env.NODE_ENV === "production" ? "production" : "development",
        "entry": "./src/browser/index.js",
        "output": {
            "path": path.resolve(process.env.PWD, "public"),
            "filename": "bundle.js",
            "chunkFilename": "[name].js"
        },
        "devtool": "cheap-module-source-map",
        "module": {
            "rules": [
                {
                    "test": /\.js$/,
                    "exclude": /(node_modules)/,
                    "loader": "babel-loader",
                    "query": {
                        "presets": [
                            "@babel/preset-env",
                            "@babel/preset-react",
                        
                        ]
                    }
                }
            ]
        }
    };
};
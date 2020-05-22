const path = require("path");

module.exports = function(env, argv) {

    return {
        "mode": process.env.NODE_ENV === "production" ? "production" : "development",
        "target": "node",
        "entry": "./src/server/index.js",
        "output": {
            "path": path.resolve(process.env.PWD),
            "filename": "server.js"
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
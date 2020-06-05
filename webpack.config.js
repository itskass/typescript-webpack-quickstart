const path = require('path');

module.exports = {
    // your project must have this file
    entry: './src/index.ts',
    // better typescript debugging.
    // Optionally remove in production
    devtool: 'inline-source-map',

    module: {
        rules: [
            {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
        // Allow  @/* as an alias for the src folder, which prevents
        // ugly and rigid imports like `import Bar from "../../../foo/bar.ts"` 
        // instead you can do "@/foo/bar.ts"
        alias: {
            "@": path.resolve(__dirname, "./src/"),
        }
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
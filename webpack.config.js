const path = require('path');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

PATHS.app_index = path.join(PATHS.app, 'index.js');

module.exports = {
    entry: {
        app: PATHS.app_index
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    }
};

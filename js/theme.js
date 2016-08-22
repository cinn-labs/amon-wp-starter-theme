const requireAll = (r) => r.keys().forEach(r);

// Styles
require('./../sass/theme.scss');

// Loads all packages js
requireAll(require.context('./../node_modules/amon-wp/', true, /\.js$/));

// Next.js compatible wrapper for elasticlunr
if (typeof window !== 'undefined') {
    // In browser environment
    global.lunr = global.lunr || {};
    var elasticlunr = require('./elasticlunr');
    module.exports = window.elasticlunr || elasticlunr;
} else {
    // In Node.js/SSR environment
    global.lunr = global.lunr || {};
    var elasticlunr = require('./elasticlunr');
    module.exports = global.elasticlunr || elasticlunr;
}
    
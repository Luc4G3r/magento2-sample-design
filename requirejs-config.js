var config = {
    // dependencies (third party)
    // deps: [
    // ],

    // overwrite existing files from other plugins or from core
    map: {
        '*': {
        }
    },

    // Paths defines associations from library name (used to include the library,
    // for example when using "define") and the library file path.
    //paths: {

     //},

    // Shim: when you're loading your dependencies, requirejs loads them all
    // concurrently. You need to set up a shim to tell requirejs that the library
    // (e.g. a jQuery plugin) depends on another already being loaded (e.g. depends
    // on jQuery).
    // Exports: if the library is not AMD aware, you need to tell requirejs what
    // to look for so it knows the script has loaded correctly. You can do this with an
    // "exports" entry in your shim. The value must be a variable defined within
    // the library.
    shim: {
        magnificPopup: ['jquery'],
        site: ['jquery','magnificPopup'],
    }
};

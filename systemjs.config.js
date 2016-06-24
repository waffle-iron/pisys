/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    // map tells the System loader where to look for things
    var map = {
        'app': 'app', // 'dist',
        '@angular': 'node_modules/@angular',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'rxjs': 'node_modules/rxjs'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {main: 'main.js', defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js'},
        'angular2-in-memory-web-api': {main: 'index.js', defaultExtension: 'js'}
    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade'
    ];
    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = {main: 'index.js', defaultExtension: 'js'};
    }

    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {main: pkgName + '.umd.js', defaultExtension: 'js'};
    };

    function packMaterial(pkgName) {
        packages['@angular2-material/' + pkgName] =  { main: item, defaultExtension: 'js'};
    }
    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

    // Angular Material 2 Packages to load.
    var materialPackages = [
        'core', 'toolbar', 'button', 'card', 'checkbox', 'icon', 'input', 'list', 'progress-bar',
        'progress-circle', 'radio', 'sidenav', 'grid-list', 'tabs', 'slide-toggle'
    ];

    materialPackages.forEach(packMaterial);

    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        map: map,
        packages: packages
    }
    System.config(config);
 /*
    // #3. Import spec files here for testing environment
    Promise.all([
        System.import('app/hero.spec'),
        System.import('app/my-uppercase.pipe.spec')
    ])

    // #4. wait for all imports to load ...
    //     then re-execute `window.onload` which
    //     triggers the Jasmine test-runner start
    //     or explain what went wrong.
        .then(window.onload)
        .catch(console.error.bind(console));*/
})(this);
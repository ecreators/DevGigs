(function(global) {
    system.config({
        paths: {
            // "paths" bietet Aliasse an
            'npm': 'node_modules/'
        },

        // "map" stellt den Ordner dar, in dem nach Änderungen gesucht werden soll
        map: {
            app: 'app',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/core/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/core/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/core/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/core/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/core/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/core/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/core/bundles/forms.umd.js',

            // andere libs
            '@rxjs': 'npm:rxjs'
        }

        // packages klärt, was zu tun ist, wenn keine Dateien und Ordner existieren
        packackes: {
            app: {
                main: './main.ts',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);
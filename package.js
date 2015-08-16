Package.describe({
    name: 'nwz:activenav',
    version: '0.0.1',
    summary: 'Set active state on navigation element',
    git: '',
    documentation: 'readme.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.3');
    api.addFiles('activenav.js');
    api.use([
        'iron:router@1.0.0'
    ], 'client');
});

Package.onTest(function(api) {
    api.use('tinytest');
    api.use('nwz:activenav');
    api.addFiles('activenav-tests.js');
});

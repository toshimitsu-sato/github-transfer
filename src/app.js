/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Sds.Application',

    name: 'Sds',

    requires: [
        // This will automatically load all classes in the Sds namespace
        // so that application classes do not need to require each other.
        'Sds.*'
    ],

    // The name of the initial view to create.
    mainView: 'Sds.view.main.Main'
});

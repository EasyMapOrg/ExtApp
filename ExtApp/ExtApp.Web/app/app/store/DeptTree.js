﻿
Ext.define('App.store.personnel.DeptTree', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.depttreelist',
    storeId: 'depttreelist',

    model: 'App.model.personnel.Dept',
    defaultRootId: '0',
    rootVisible: true,
    nodeParam: 'PID',

    root: {
        text: '顶级机构',
        id: 0,
        expanded: true,
        Name: '顶级机构'
    },

    proxy: {
        type: 'ajax',
        url: '/api/Dept/GetChildNodes',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        }
    },

    autoSync: true,
    autoLoad: true
});
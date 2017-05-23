﻿
Ext.define('App.view.authority.role.List', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.rolelist',

    requires: [
        'App.view.authority.role.ListController'
    ],

    controller: 'rolelist',
    title: '角色列表',
    closable: true,
    layout: 'fit',

    tbar: [{
        xtype: 'button',
        text: '添加',
        iconCls: 'Add',
        handler: 'onAddClick'
    }, {
        xtype: 'button',
        text: '编辑',
        iconCls: 'Applicationedit',
        handler: 'onEditClick'
    }, {
        xtype: 'button',
        text: '权限',
        iconCls: 'Userkey',
        handler: 'onAuthClick'
    }, {
        xtype: 'button',
        text: '删除',
        iconCls: 'Delete',
        handler: 'onDeleteClick'
    }],

    items: [{
        xtype: 'gridpanel',
        border: false,

        tbar: [{
            xtype: 'searchform',

            items: [{
                xtype: 'textfield',
                fieldLabel: '查询',
                labelWidth: 50,
                width: 180,
                name: 'name',
                emptyText: '编码/名称'
            }, {
                xtype: 'combo',
                fieldLabel: '状态',
                name: 'Status',
                width: 130,
                store: [[
                    '0', '全部'
                ], [
                    '1', '启用'
                ], [
                    '0', '禁用'
                ]],
                value: 0,
                editable: false
            }, {
                xtype: 'button',
                text: '搜索',
                margin: '0 0 0 10',
                handler: 'onSearchClick'
            }, {
                xtype: 'button',
                text: '重置',
                margin: '0 0 0 10',
                handler: 'onResetClick'
            }]
        }],

        columns: [{
            xtype: 'rownumberer'
        }, {
            text: '编码',
            dataIndex: 'Code'
        }, {
            text: '名称',
            dataIndex: 'Name'
        }, {
            text: '排序',
            dataIndex: 'Sort'
        }, {
            text: '状态',
            dataIndex: 'Status',
            renderer: App.renderer.status
        }, {
            text: '备注',
            dataIndex: 'Comment',
            flex: 1
        }],

        listeners: {
            rowdblclick: 'onEditClick'
        },

        bbar: {
            xtype: 'pagingtoolbar',
            displayInfo: true,
            pageSize: 25,
            plugins: 'progressbarpager'
        }
    }]
});


# 首页


'use strict'

$ = require 'jquery'

class Index extends require ('./base')
    run: ->
        @render require('../tpl/view/index.html'),
            cur_index: 1

        .then =>
            console.log @

    destroy: ->

    watch: ->

    cacheDom: ->



module.exports = Index
module.exports.viewName = 'index'

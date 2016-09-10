

# header tag

$ = require 'jquery'

{Template, Component} = require 'mcoreapp'

class Header extends require('./base')

    init: ->
        @render require '../tpl/tag/header.html'

    destroy: ->

    watch: ->

    cachDom: ->



Template.components['top-header'] = Header


# header tag

$ = require 'jquery'

{Template, Component} = require 'mcoreapp'

class Footer extends require('./base')

    init: ->
        @render require '../tpl/tag/footer.html'

    destroy: ->

    watch: ->

    cachDom: ->



Template.components['cmm-footer'] = Footer
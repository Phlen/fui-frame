'use strict'

$ = require 'jquery'
mcoreapp = require 'mcoreapp'

{View, util, Template} = mcoreapp
mixin = require '../common/mixin'

class Base extends View
    beforeInit: ->
        mixin @


module.exports = Base
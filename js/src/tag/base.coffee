

{Template, Component, util} = require 'mcoreapp'
mixin = require '../common/mixin'

class Base extends Component
    constructor: (@el, @virtualEl)->
        super @el, @virtualEl
        mixin @

module.exports = Base
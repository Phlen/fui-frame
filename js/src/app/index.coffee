
# 入口文件


'use strict'

$ = require 'jquery'
mcoreapp = require 'mcoreapp'
{App} = mcoreapp
utils = require '../common/utils'

# require('mcoreExtPlusWatch') mcoreapp
require('mcoreExtBinderSync') mcoreapp
require('mcoreExtBinderValidator') mcoreapp

# formatters
require '../formatters/formatters'

# tag
require '../tag/header'
require '../tag/footer'

app = new App $('#main')

require('./route') app, ->
    app.run()
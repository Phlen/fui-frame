

config = require './config'
storage = require './storage'
api = require '../app/api'
utils = require './utils'

module.exports = (target)->
    target.api = api
    target.config = config
    target.storage = storage
    target.utils = utils

#  

'use strict'

storage = window.localStorage

prefix = 'app_'

exports.get = (key, defaultVal)->
    data = storage.getItem prefix + key
    if null == data
        return defaultVal

    try
        data = JSON.parse data
    catch error
        data = defaultVal

    data

exports.set = (key, val)->
    storage.setItem prefix + key, JSON.stringify val

exports.remove = (key)->
    storage.removeItem prefix + key

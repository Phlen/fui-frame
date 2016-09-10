###*
 *
 * 多国语言
 * @author vfasky <vfasky@gmail.com>
###
'use strict'

mcoreapp = require 'mcoreapp'
i18n = require('mcoreExtFormatterI18n') mcoreapp
env = require 'env'
storage = require './storage'

# 加载语言包
# i18n.loadDict 'en', require '../i18nDict/en'

# 设置当前语言
# i18n.setLocale storage.get 'i18n_locale', ''

if env.env == 'dev'
    soureList = storage.get 'i18n_soure_list', []
    writeTime = null

    writeSoureList = (txt)->
        clearTimeout writeTime if writeTime
        writeTime = setTimeout ->
            storage.set 'i18n_soure_list', soureList
        , 200


    i18n.noMatchDict = (txt, locale)->
        #return if locale != 'en'

        if soureList.indexOf(txt) == -1
            console.log "[%s] add i18n soure", txt
            soureList.push txt
            writeSoureList()

module.exports = i18n

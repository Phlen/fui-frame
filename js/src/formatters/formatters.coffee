
# 模板过滤工具

'use strict'

moment = require 'moment'
{Template, util} = require 'mcoreapp'
require '../common/i18n'

moment.locale 'zh-cn'

# 日期格式化
Template.formatters['dateFormat'] = (value, format = 'YYYY-MM-DD HH:mm')->
    return '' if !value

    value = Number(value) * 1000 if util.isNumber value

    moment(value).format format

Template.formatters['fillZero'] = (value, length)->
    value = String(parseInt(value))
    if value.length < length
        for i in [0...(length - value.length)]
            value = '0' + value
    value


# 某个日期距离现在过来多久
Template.formatters['fromNow'] = (value)->
    moment(value).fromNow()


# 背景图片
Template.formatters['bg'] = (imgUrl)->
    return '' if !imgUrl
    "background-image:url(#{imgUrl}); background-size: cover; background-repeat: no-repeat"

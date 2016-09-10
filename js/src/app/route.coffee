
# 路由设置

'use strict'

module.exports = (app, done = ->)->

    # 首页
    app.route '/', require '../view/index'
        .route '/text', require '../view/test'



        .route '*', require '../view/index'

    done()
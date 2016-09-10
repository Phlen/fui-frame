
# 接口设置


{http, util} = require 'mcoreapp'
config = require '../common/config'
env = config.env

host = env.api.host

# 网络问题的错误处理
http.regErrCallback 'network', (xhr, status, hideError)->
    msg = '网络好像有点问题，请重试'

    # 后端是否返回错误信息
    if xhr.responseText
        try
            res = $.parseJSON xhr.responseText
            msg = res.error if res.error
        catch error

    httpCode = xhr.statusCode().status

    if httpCode
        msg = msg + ' ( code: ' + httpCode + ' )'

    # 是否需要隐藏
    if !hideError
        alert msg
    else
        console.log msg

# 业务上的错误提示
http.regErrCallback 'error', (res, hideError)->
    msg = res.error or res.msg or '服务器在开小差，没有回复'

    # 是否需要隐藏
    if !hideError
        alert msg
    else
        console.log msg


http.isSuccess = ()-> true


# 返回数据的处理
http.responseFormat = (res)-> res

# 处理发送的数据
http.sendDataFormat = (data)->
    data

module.exports =
    # 首页
    index: (data)->
        http.get host + 'site/index', data

    # 联系我们
    contact: (data)->
        http.get host + 'connect/index', data






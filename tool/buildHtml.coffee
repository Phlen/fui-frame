###*
#
# @date 2016-01-27 15:55:49
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

fs = require 'fs'
path = require 'path'
glob = require 'glob'
_ = require 'lodash'


module.exports = (options = {})->
    tplPath = options.tplPath or= ''
    out = options.out or= ''
    data = options.data or= {}
    data.assets = {}

    ->
        # 读模板文件
        tplFiles = glob.sync tplPath
        tplMap = {}
        tplFiles.forEach (tplFile)->
            tplMap[tplFile] = fs.readFileSync tplFile, 'utf8'

        @plugin 'done', (stats)->
            data = _.assign data, @.options
            data.packs = stats.toJson().assetsByChunkName
            data.packKeys = Object.keys data.packs

            data.packKeys.forEach (key)->
                data.assets[key] = {}
                if Array.isArray(data.packs[key])
                    data.assets[key] = {}
                    data.packs[key].forEach (filename)->
                        data.assets[key][path.extname(filename).replace('.', '')] = filename
                else
                    data.assets[key]['js'] = data.packs[key]

            # 替换模板
            for tplFile, tpl of tplMap
                compiled = _.template tpl
                tpl = compiled data
                outFile = path.join out, path.basename tplFile
                fs.writeFileSync outFile, tpl, 'utf8'

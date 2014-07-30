/*
 *  bootstrap.js
 *
 *  David Janes
 *  IOTDB
 *  2014-07-29
 *
 *  This will load all the Models into exports.models
 *
 *  Copyright [2013-2014] [David P. Janes]
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

"use strict"

var node_path = require('path');
var node_fs = require('fs')

exports.models = []

var dirs = node_fs.readdirSync(__dirname)
dirs.sort()

for (var di in dirs) {
    var dir = dirs[di]
    var dir_path = node_path.join(__dirname, dir)

    var dir_stbuf = node_fs.statSync(dir_path)
    if (!dir_stbuf.isDirectory()) {
        continue
    }

    var files = node_fs.readdirSync(dir_path)
    files.sort()

    for (var fi in files) {
        var file = files[fi]
        if (!file.match(/[.]js$/)) {
            continue
        }

        var path = node_path.join(__dirname, dir, file)

        try {
            var module = require(path)
            if (module.Model) {
                exports.models.push(module.Model)
            }
        }
        catch (x) {
            console.log("# iotdb-models:bootstrap", "issue reading module -- ignorning", path)
        }
    }
}

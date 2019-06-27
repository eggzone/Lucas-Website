var fs = require('fs')

var db_path = './data/db.json'
var test_user = { "name": "肖泓彦", "gender": 1, "id": 1 }

//回调函数
exports.listAll = function(callback) {
    fs.readFile(db_path, 'utf8', function(err, data) {
        if (err) {
            return callback(err)
        } else {
            ret = JSON.parse(data)
            callback(null, ret)
            // res.render('./matelist.html', {user:data2.user})
        }
    })
}

//更新列表，排序
exports.update = function() {
    fs.readFile(db_path, 'utf8', function(err, data) {
        if (err) {
            console.error(err);
        } else {
            data = JSON.parse(data)
            // console.log(data); 
            for (i = 0; i < data.user.length; i++) {
                data.user[i].id = i + 1;
            }
            fs.writeFile(db_path, JSON.stringify(data), function(err) {
                console.error("文件写入失败！")
            })
        }
    })    
}

//添加
exports.add = function(item, callback) {
    fs.readFile(db_path, 'utf8', function(err, data) {
        if (err) {
            console.error(err);
        } else {
            var ret = new Object
            ret.name = item.name
            if (item.male == "on") {
                ret.gender = 1
            } else if (item.female == "on") {
                ret.gender = 0
            }
            data = JSON.parse(data)
            ret.id = data.user.length + 1
            data.user.push(ret)
            fs.writeFile(db_path, JSON.stringify(data), function(err) {
                console.error(err)
            })
        }
    })
}

//删除
exports.delete = function(ID) {
    fs.readFile(db_path, "utf8", function(err, data) {
        if (err) {
            console.error(err);
        } else {
            data = JSON.parse(data)
            data.user.splice(ID - 1, 1)
            fs.writeFile(db_path, JSON.stringify(data), function(err) {
                console.error(err)
            })
        }
    })
}

// router.get('/classmates/delete/:id', function(req, res) {
//     fs.readFile('./data/db.json', 'utf8', function(err, data) {
//         if (err) {
//             console.error(err)
//         } else {
//             data = JSON.parse(data)
//             data.user.splice(req.params.id - 1, 1)
//             fs.writeFile('./data/db.json', JSON.stringify(data), function(err) {
//                 console.error(err)
//                 res.redirect('/classmates/listUsers')
//             })
//         }
//     })    
// })
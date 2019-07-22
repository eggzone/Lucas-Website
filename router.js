var fs = require('fs')
var express = require('express')
var router = express.Router()
var classmates = require('./classmates')

//根目录
router.get('/', function(req, res) {
    res.render('./index.html')
})

//时钟
router.get('/clock', function(req, res) {
    res.render('./clock.html')
})

//班级同学主页
router.get('/classmates', function(req, res) {
    res.redirect('/classmates/listUsers')
})

//同学列表
router.get('/classmates/listUsers', function(req, res) {
    classmates.update()
    classmates.listAll(function(err, ret){
        if (err) {
            console.error(err)
        } else {
            // console.log(ret)
            res.render('./matelist.html', {user:ret.user})
        }
    })
})

//新增，get
router.get('/classmates/addUser', function(req, res) {
    res.render('./addUser.html')
})

//新增，post
router.post('/classmates/addUser', function (req, res) {
    classmates.add(req.body)
    res.redirect('/classmates/listUsers')
})

//删除
router.get('/classmates/delete/:id', function(req, res) {
    classmates.delete(req.params.id)
    res.redirect('/classmates/listUsers')
})

//test
router.get('/test', function(req, res) {
    res.render('./webtest.html')
})

//导出模块
module.exports = router
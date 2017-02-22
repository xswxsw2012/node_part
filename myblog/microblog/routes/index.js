var express = require('express');
var router = express.Router();

/* GET home page. */
//首页
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//用户个人页
router.get('/u/:user', function(req, res, next) {

});
//发言页
router.post('/post', function(req, res, next) {

});
//注册页
router.get('/reg', function(req, res, next) {

});
//提交注册
router.post('/reg', function(req, res, next) {

});
//登陆
router.get('/login', function(req, res, next) {

});
//提交登陆
router.post('/login', function(req, res, next) {

});
//登出页
router.get('/logout', function(req, res, next) {

});

module.exports = router;

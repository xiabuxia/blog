/**
 * 使用范例
 */


/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */
//app.get('/login', function(req, res) {
	//console.log(req.query.username);
	//if(req.query.username === 'xiaoming' && req.query.password === 'abcd1234'){
		//res.send('登录成功');
	//}
	//else{
		//res.send('登录失败');
	//}
//};


app.get('/login', function(req, res) {
	console.log('有请求来了');
	console.log(req.query);

	if (req.query.username === 'xiaoming' && req.query.password === 'abcd1234') {
		res.header('Access-Control-Allow-Origin','http://a.xbx.com:8080');
		res.send('成功');
	}else{
		res.send('失败');
	}
	
});

app.post('/login', function(req, res) {
	console.log('有请求来了');
	console.log(req.body);
	if (req.body.username === 'xiaoming' && req.body.password === 'abcd1234') {
		res.send('成功');
	}else{
		res.send('失败');
	}
});

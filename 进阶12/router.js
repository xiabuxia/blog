

// var length
// for （var i= length;i<length+7,i++）{

// }

app.get('/comment', function(req, res) {
	console.log('有请求来了');
	//console.log(req.query.length);
	var len = +req.query.length+1;
	//console.log(len);
	var data={};
	for(var i=len,j=0;i<len+7;i++){
		data[j] = '内容'+i;
		j++;
	}
	console.log(data[0]);

		res.send(data);

});


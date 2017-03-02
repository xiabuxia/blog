


app.get('/moreInfor', function(req, res) {
	 var len = +req.query.index+1;
	 var data={};
	 for(var i=len,j=0;i<len+7;i++){
	 	data[j] = '内容'+i;
	 	j++;
	 }
		res.send(data);
});
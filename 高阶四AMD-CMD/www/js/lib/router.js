
var data = [{
    message:'' ,
    imgUrl: 'imgs/w_1.jpg'
    },{
    message:'' ,
    imgUrl: 'imgs/w_23.jpg'
    },{
    message:'' ,
    imgUrl: 'imgs/w_22.jpg'
    },{
    message:'' ,
    imgUrl: 'imgs/w_25.jpg'
    },{
    message:'' ,
    imgUrl: 'imgs/w_6.jpg'
    },{
    message:'' ,
    imgUrl: 'imgs/w_26.jpg'
    },{
    message:'' ,
    imgUrl: 'imgs/w_8.jpg'
    },{
    message:'' ,
    imgUrl: 'imgs/w_9.jpg'
    },{
    message:'' ,
    imgUrl: 'imgs/w_10.jpg'
    },{
    message:'' ,
    imgUrl: 'imgs/w_11.jpg'
    },{
    message:'' ,
    imgUrl: 'imgs/w_12.jpg'
    },{
    message:'' ,
    imgUrl: 'imgs/w_13.jpg'
    },{
    message:'' ,
    imgUrl: 'imgs/w_14.jpg'
    },{
    message:'' ,
    imgUrl: 'imgs/w_15.jpg'
    },{
    message:'' ,
    imgUrl: 'imgs/w_16.jpg'
    },{
    message:'' ,
    imgUrl: 'imgs/w_17.jpg'
    },{
    message:'' ,
    imgUrl: 'imgs/w_18.jpg'
    },{
    message:'' ,
    imgUrl: 'imgs/w_19.jpg'
    },{
    message:'' ,
    imgUrl: 'imgs/w_20.jpg'
    },{
    message:'' ,
    imgUrl: 'imgs/w_21.jpg'
    }
]



app.get('/login', function(req, res) {
	console.log('有请求来了');
	console.log(req.query);

    var pageIndex = req.query.page;
	var len = 3;
	var datas = data.slice(pageIndex*len, pageIndex*len+len); //0, 3;  3, 6
	res.send({
		status: 0,
		data: datas
	});
	
});
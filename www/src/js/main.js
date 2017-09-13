requirejs.config({
	baseUrl:"./src/js",
	waitSeconds:200,
	paths:{
		'jquery': 'lib/jquery.min'
	}
});

requirejs(['app/index']);

var gulp = require("gulp"),
//编译sass
	sass = require("gulp-sass"),
//检测、运行本地web服务器
	server = require("gulp-webserver");
//编译scss样式添加到css中
	gulp.task("sass",function(){
		return gulp.src("sass/*.scss",["sass"])
			.pipe(sass())
			.pipe(gulp.dest("css/"))
	});
//监测本地中的所有scss文件，有改变时就自动编译
gulp.task("server",function(){
	gulp.watch("sass/*.scss",["sass"]);
	return gulp.src("./")
		.pipe(server({
			livereload:true,
			directoryListing:true,
			open:true
		}));
});


gulp.task("default",["sass","server"]);
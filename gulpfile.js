//default Gulp Task
exports.default = series(scssTask,jsTask,browserSyncServe,watchTask);

//build Gulp task
exports.build = series(scssTask, jsTask);
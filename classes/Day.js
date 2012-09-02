/*
 * Day class
 */
function Day(name) {}

Day.prototype.name = name; // For example 'Monday'
Day.prototype.tasks = new Array(); // holds day instances

Day.prototype.add = function(task){
	this.tasks.push(task);
}

Day.prototype.remove = function(task){
	var id = this.tasks.indexOf(task);
	if(id < 0) {
		console.debug('Task does not exist in tasklist');
		return;
	}
	this.tasks.splice(id,1);
}



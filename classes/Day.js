/*
 * Day class
 */
function Day(name) {
	this.name = name; // For example 'Monday'
	_tasks = new Array(); // holds day instances
	
	this.DAY = {
			MONDAY   : {value: 0, name: "Monday"}, 
			TUESDAY  : {value: 1, name: "Tuesday"}, 
			WENESDAY : {value: 2, name: "Wenesday"},
			THURSDAY : {value: 3, name: "Thursday"},
			FRIDAY   : {value: 4, name: "Friday"}
	};
	
	this.addTask = function(task){
		_tasks.push(task);
	}
	
	this.removeTask = function(task){
		var id = _tasks.indexOf(task);
		if(id < 0) {
			console.debug('Task does not exist in tasklist');
			return;
		}
		_tasks.splice(id,1);
	}
}






/*
 * User class
 */
function User(id) {
	this.id = id;
	this.flex = 0.0;
	var weeks = {};
	var tasks = {};
	
	this.addTask = function(task) {
		
		$('<div>' + task.name + '</div>')
		.data('number', task.id)
		.attr('id', task.id)
		.appendTo('#tasks')
		.draggable(
			{
				containment : '#content',
				stack : '#cardPile div',
				cursor : 'move',
				revert : true
			});
		
		tasks[task.id] = task;
	}
	
	this.addWeek = function(week) {
		if(weeks[week.number] != undefined) {
			console.debug('Week %d already exist in week map', week.number);
			return;
		}
		weeks[week.number] = week;
	}
	this.removeWeek = function(number) {
		console.log(weeks[number]);
		if(weeks[number] == undefined) {
			console.debug('Week %d does not exist in week map', number);
			return;
		}
		weeks[number] = undefined;
	}
	this.getWeek = function(number) {
		if(weeks[number] == null) {
			console.debug('Week does not exist in week map');
			return;
		}
		return weeks[number];
	}
}

User.prototype.toString = function()
{
	return "User with id " + this.id;
}
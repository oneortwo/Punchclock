/*
 * User class
 */
function User(id) {
	this.id = id;
	this.flex = 0.0;
	_weeks = new Array();
	
	this.addWeek = function(week) {
		_week.push(week);
	}
	
	this.removeWeek = function(week) {
		var id = _weeks.indexOf(week);
		if(id < 0) {
			console.debug('Day does not exist in daylist');
			return;
		}
		_weeks.splice(id,1);
	}
}
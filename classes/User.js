/*
 * User class
 */
function User(id) {
	this.id = id;
	this.flex = 0.0;
	var _weeks = {};
	
	this.addWeek = function(week) {
		_weeks[week.number] = week;
	}
	
	this.removeWeek = function(number) {
		console.log(_weeks[number]);
		if(_weeks[number] == undefined) {
			console.debug('Week %d does not exist in week map', number);
			return;
		}
		_weeks[number] = undefined;
	}
	
	this.getWeek = function(number) {
		if(_weeks[number] == null) {
			console.debug('Week does not exist in week map');
			return;
		}
		return _weeks[number];
	}
}

User.prototype.toString = function()
{
	return "User with id " + this.id;
}
/*
 * Week class
 */
function Week(number) {
	this.number = number;
	this.hours = 0.0;
	_days = new Array();
	
	this.addDay = function(day) {
		_days.push(day);
	}
	
	this.removeDay = function(day) {
		var id = _days.indexOf(day);
		if(id < 0) {
			console.debug('Day does not exist in daylist');
			return;
		}
		_days.splice(id,1);
	}
}

Week.prototype.toString = function()
{
	return "Week number " + this.number;
}
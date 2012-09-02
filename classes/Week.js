/*
 * Week class
 */
function Week(number) {
	this.number = number;
	this.hours = 0.0;
	var days = {};
	
	this.addDay = function(day) {
		if(_days[_days.number] != undefined) {
			console.debug('Day %d already exist in day map', day.number);
			return;
		}
		_days[day.number] = day;
	}
	
	this.removeDay = function(number) {
		console.log(_days[number]);
		if(_days[number] == undefined) {
			console.debug('Day %d does not exist in day map', number);
			return;
		}
		_days[number] = undefined;
	}
	
	this.getDay = function(number) {
		if(_days[number] == null) {
			console.debug('Day does not exist in day map');
			return;
		}
		return _days[number];
	}
}

Week.prototype.toString = function()
{
	return "Week number " + this.number;
}

function() {
	var w = new Week();
}

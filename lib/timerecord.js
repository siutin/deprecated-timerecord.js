var TimeRecord = function(totalmillionseconds){

	var tmsec = totalmillionseconds;
	var year, day, hour, minute, second, millionsecond;
	

	function getYear(){
		return year;
	}
	function getDay(){
		return day;
	}
	function getHour(){
		return hour;
	}
	function getMinute(){
		return minute;
	}
	function getSecond(){
		return second; 
	}
	function getMillionsecond(){
		return millionsecond;
	}

	function init(){
		var tmp = tmsec;
		year = Math.floor(tmp / 1000 / 60 / 60 / 24 / 365);
		tmp -= year * 1000 * 60 * 60 * 24 * 365;
		day = Math.floor(tmp / 1000 / 60 / 60 / 24);
		tmp -= day * 1000 * 60 * 60 * 24;
		hour = Math.floor(tmp / 1000 / 60 / 60);
		tmp -= hour * 1000 * 60 * 60;
		minute = Math.floor(tmp / 1000 / 60);
		tmp -= minute * 1000 * 60;
		second = Math.floor(tmp / 1000);
		tmp -= second * 1000;	
		millionsecond = tmp;
	}

	this.getYear = function(){
		return getYear();
	};

	this.getDay = function(){
		return getDay();
	};

	this.getHour = function(){
		return getHour();
	};

	this.getMinute = function(){
		return getMinute();
	};

	this.getSecond = function(){
		return getSecond();
	};

	this.getMillionsecond = function(){
		return getMillionsecond();
	};

	this.getJson = function(){
		return {
			year: getYear(),
			day: getDay(),
			hour: getHour(),
			miniute: getMinute(),
			second: getSecond(),
			millionsecond: getMillionsecond()
		}
	};
	init();

}
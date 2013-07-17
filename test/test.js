var expect = require("expect.js");
var _ = require("underscore");

var TimeRecord = require("./../lib/timerecord");
describe('TimeRecord object simple test', function(){

  describe('instance', function(){  	
  	it('without paramters', function(){

  		var r1 = new TimeRecord();
  		
  		it('is not null or undefined.', function () {
  			expect(r1).not.to.equal(null);
	  		expect(r1).not.to.equal(undefined);
  		});

  		it('with a valid json result.', function(){
  	
  			expect(actual).to.have.property('getJson');
  			expect(actual.getJson).to.be.a('function');

  			var actual = r1.getJson();
  			var expected = {
	  			year: 0,
	  			day: 0,
	  			hour: 0,
	  			minute: 0,
	  			second: 0,
	  			millionsecond: 0, 
	  			isnegative: false,
	  		};


	  		expect(actual).not.to.equal(null);  		
	  		expect(actual).to.eql(expected);
	  	});
  	});
  });

  describe('Comparision', function(){
    it('by a variable in millionsecond between two Date objects.', function(){

    	// start time
    	var d1 = new Date("2013-06-17T00:00:00.000Z"); 
    	// end time
    	var d2 = new Date("2013-06-18T05:03:42.090Z");

    	// different
    	var diff = d2 - d1;

    	var r1 = new TimeRecord(diff);

    	 expect(0).to.eql( r1.getYear() );
    	 expect(1).to.eql( r1.getDay() );
    	 expect(5).to.eql( r1.getHour() );    	 
    	 expect(3).to.eql( r1.getMinute() );
    	 expect(42).to.eql( r1.getSecond() );    	 
    	 expect(90).to.eql( r1.getMillionsecond() );
    	 expect(false).to.eql( r1.isNegative() );

    });

    it('by two Date objects.', function(){

    	// start time
    	var d1 = new Date("2013-06-17T00:00:00.000Z"); 
    	// end time
    	var d2 = new Date("2013-06-18T05:03:42.090Z");

    	var r1 = TimeRecord.Compare(d1,d2);

    	 expect(0).to.eql( r1.getYear() );
    	 expect(1).to.eql( r1.getDay() );
    	 expect(5).to.eql( r1.getHour() );    	 
    	 expect(3).to.eql( r1.getMinute() );
    	 expect(42).to.eql( r1.getSecond() );    	 
    	 expect(90).to.eql( r1.getMillionsecond() );
    	 expect(true).to.eql( r1.isNegative() );

    });
  });
});
# TimeRecord.js
  TimeRecord is a time library for nodejs

## Install

Install via NPM:
```
npm install timerecord
```
Then:
```javascript 
var TimeRecord = require("timerecord");
```

## Example
   
```javascript  
var oldDate = new Date("2013/07/17 13:52:37.596");  
var newDate = new Date("2013/07/18 21:36:15.400");  
	 
//compare two date objects
var ctr = TimeRecord.Compare(newDate,oldDate).getJson(); 

console.log( "Time difference between two dates: \n" +
			ctr.year + " years, " + 
			ctr.day + " days, " +
			ctr.hour + " hours, " + 
			ctr.minute + " mins, " +  
			ctr.second + " seconds, " + 
			ctr.millionsecond + " millionseconds (" +
			(ctr.isnegative? "overtime":"remaining time") + ")" ); 

```

output:

```
Time difference between two dates: 
0 years, 1 days, 7 hours, 43 mins, 37 seconds, 804 millionseconds (remaining time)
```

## Test
`make test`
or
`npm test`

## Credits

(The MIT License)

Copyright (c) 2013 Martin Chan (http://twitter.com/osiutino)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

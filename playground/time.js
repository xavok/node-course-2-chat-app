/**
 * Created by Xavok on 5/8/2017.
 */
var moment =require('moment');
var date = moment();
date.add(1, 'years').subtract(9, 'month');
console.log(date.format('MMM Do, YYYY'));
console.log(date.format('h:mm a'));

var someTimes = moment().valueOf();
module.exports = function(date){
var today = new Date();
  var todayYear=today.getFullYear();
 return todayYear-date;
  //return date;
  // console.log(todayYear);
}

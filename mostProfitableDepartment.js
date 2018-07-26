module.exports = function(mostProfitable){
	var salesdata ={};
  var profit='';
  var data=0;

  //console.log(mostProfitable[1].department);
  for(var i=0;i<mostProfitable.length; i++){
    var dept= mostProfitable[i].department;

    if(salesdata[dept]===undefined){
    salesdata[dept]= 0;
    }
    salesdata[dept] = salesdata[dept]+ mostProfitable[i].sales;

for (var key in salesdata){
if (salesdata[key]>data){
data = salesdata[key];
  profit=key;
  // console.log(data)

}

}
  }
  return profit;
}


module.exports = function(mostProfitable){
	var salesday ={};
  var profit='';
  var data=0;

  //console.log(mostProfitable[1].department);
  for(var i=0;i<mostProfitable.length; i++){
    var dept= mostProfitable[i].day;

    if(salesday[dept]===undefined){
    salesday[dept]= 0;
    }
    salesday[dept] = salesday[dept]+ mostProfitable[i].sales;

for (var key in salesday){
if (salesday[key]>data){
data = salesday[key];
  profit=key;
  // console.log(data)

}

}
  }
  return profit;
}

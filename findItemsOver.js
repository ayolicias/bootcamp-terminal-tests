module.exports = function(ItemsOver, threshold){
 // console.log(ItemsOver);
var itemList =[];

  for (var i=0; i<ItemsOver.length; i++){
    var results= ItemsOver[i];
 	if (results.qty > threshold){
    itemList.push(results);

  }
  }
  return itemList;
};

module.exports = function(ItemsOver20){
 // console.log(ItemsOver20);
var itemList =[];

  for (var i=0; i<ItemsOver20.length; i++){
    var results= ItemsOver20[i];
 	if (results.qty > 20){
    itemList.push(results);

  }
  }
  return itemList;
};

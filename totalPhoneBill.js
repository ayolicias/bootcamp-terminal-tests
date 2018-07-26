module.exports = function(totalBill){

// call, sms, call, sms, sms

  var bill=totalBill.split(', ')
  var total= 0;
  for (var i=0;i<bill.length;i++){
    if(bill[i].startsWith('c')){
      total = total + 2.75 ;
    }
    else if(bill[i].startsWith('s')){
      total=total + 0.65;
    }
  }
  return 'R' + total.toFixed(2);
}

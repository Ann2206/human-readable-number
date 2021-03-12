module.exports = function toReadable (number) {
  let arr = number.toString().split('').map(Number);
  console.log(arr);
  let arrNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let arr2Numbers = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let arr3Numbers = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];

  for (let i=0; i<arr.length;i++){
   if (arr.length == 1){
     arr[i] = arrNumbers[arr[i]];
   }
   if (arr.length == 2){
    if (arr[0]==1 && arr[1]==0){
      arr.length =1;
      arr[i] = 'ten';
    }else{
     if (arr[0]==1 ){ 
       arr[i] = arr3Numbers[arr[i+1]];
       arr.length =1;
     }else{
    if (arr[1]==0){
      arr[i] = arr2Numbers[arr[i]];
      arr.length =1;
    
    }else{
    arr[i] = arr2Numbers[arr[i]] + ' ' + arrNumbers[arr[i+1]];
    arr.length = 1;
  }
  }
  }
  }
  if (arr.length == 3){
     if( arr[1] == 0 && arr[2] == 0){
      arr[i] = arrNumbers[arr[i]] + ' hundred';
      arr.length =1;
    }else{
    if (arr[2] == 0 ){
      arr[i] = arrNumbers[arr[i]] + ' hundred ' + arr2Numbers[arr[i+1]];
      arr.length =1;
    }else {
       if(arr[1] == 1){
      arr[i] = arrNumbers[arr[i]] + ' hundred ' + arr3Numbers[arr[i+2]];
      arr.length =1;
      }else{
        if (arr[1] ==0){
          arr[i] = arrNumbers[arr[i]] + ' hundred ' + arr2Numbers[arr[i+1]] + arrNumbers[arr[i+2]];
          arr.length =1;
        }else
    arr[i] = arrNumbers[arr[i]] + ' hundred ' + arr2Numbers[arr[i+1]] + ' ' + arrNumbers[arr[i+2]];
    arr.length =1;
  }
}
}
}
  }
  console.log(arr);
  let str = arr.join(' ');
  return str;
}

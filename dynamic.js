function compare(text,value1, operator, value2) {
    switch (operator) {
      case '>':   return value1 > value2;
      case '<':   return value1 < value2;
      case '>=':  return value1 >= value2;
      case '<=':  return value1 <= value2;
      case '==':  return value1 == value2;
      case '!=':  return value1 != value2;
      case '===': return value1 === value2;
      case '!==': return value1 !== value2;
    }
  }
  
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  
  var getData,
        data,
        limitText="",
        limits,
        codeText="",
        codes,
        breaking = 0,
        selected_campaign = 'none';
  const random = randomInt(0, 100);
  console.log("random: " +random);
   getData= "1_kupon_kodu,10,2_kupon_kodu,20,3_kupon_kodu,30";
  
   data = getData.split(',');
  
   for (let index = 0; index < data.length; index++) {
      
      if (index %2 == 0){
          codeText = codeText + data[index]+',';
      }else if (index % 2 == 1) {
          limitText = limitText+data[index]+','; 
      }
  }
  
  limitText=limitText.slice(0,-1);
  console.log("LimitText: "+limitText);
  limits = limitText.split(',');
  for (let index = 0; index < limits.length; index++) {
      limits[index] = parseInt(limits[index]);
      if(index == 0){
          limits[index] = limits[index];
      }else{
      limits[index] =limits[index-1] + limits[index];
      }
      console.log(limits);
  }
  
  codeText=codeText.slice(0,-1);
  console.log("CodeText: "+codeText);
  codes = codeText.split(',');
  console.log("limit son index: " + limits.length);
  
  
  
  
  
  for (let index = 0; index < codes.length; index++) {
  
  if(compare(codes[index],random, '<=', limits[index]) == true && breaking <= 0 && index == 0 ){
      console.log(codes[index]);
      selected_campaign = codes[index];
      breaking++;
  }else if(compare(codes[index],random, '<=', limits[index]) == true && breaking <= 0 && index != 0 && compare(codes[index],random, '>', limits[index-1]) == true ){
      console.log(codes[index]);
      selected_campaign = codes[index];
      breaking++;
  
  
  }else if(random > limits[limits.length-1] && breaking <= 0 ){
      console.log('Loser');
      selected_campaign = 'loser';
      breaking++;
  }
      
  }

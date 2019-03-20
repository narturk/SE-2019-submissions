function union(x, y){
  if(Array.isArray(x) && Array.isArray(y)){
      var obj = {};
      for (var i = x.length-1; i >= 0; -- i)
          obj[x[i]] = x[i];
      for (var i = y.length-1; i >= 0; -- i)
          obj[y[i]] = y[i];
      var res = []
      for (var k in obj) {
          res.push(obj[k]);
      }    
      return res;
  }
  else if(typeof x == 'object' && typeof y == 'object'){
      return Object.assign(x, y);
  }
  return undefined;
}

function same(x, y){
  for(i in x){
      if(x[i] !== y[i])
      return false;
  }
  for(i in y){
      if(y[i] !== x[i])
      return false;
  }
  return true;
}
function magicMultiply(x,y)
{
  if(x===0 && y===0)
  {
    return "All input 0";
  }
  if(x.constructor === Array)
  {
    let val=[];
    for(i=0;i<x.length;i++)
    {
      val.push(x[i]*y);
    }
    return val;
  }
  if(y.constructor===String)
  {
    return "Error, cannot multiply a string";
  }
  if(x.constructor===String)
  {
    let val="";
    for(i=0;i<y;i++)
    {
      val+=x;
    }
    return val;
  }
  return x*y;
}

console.log(magicMultiply(2,4));
console.log(magicMultiply(4,"Hey"));
console.log(magicMultiply(0,0));
console.log(magicMultiply([3,2,1],4));
console.log(magicMultiply("Hey",4));

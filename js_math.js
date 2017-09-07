
function zero_negativity(x)
{
  for(i=0;i<x.length;i++)
  {
    if(x[i]<0)
    {
      return false;
    }
  }
  return true;
}
function is_even(x)
{
  if(x%2===0)
  {
    return true;
  }
  return false;
}
function how_many_even(x)
{
  let count=0;
  for(i=0;i<x.length;i++)
  {
    if(is_even(x[i])===true)
    {
      count++;
    }
  }
  return count;
}
function create_dummy_array(x)
{
  var dummy_array=[];
  for(i=0;i<x;i++)
  {
    dummy_array.push(Math.floor((Math.random()*10)+1));
  }
  return dummy_array;
}
function random_choice(x)
{
  num=Math.floor(Math.random()*x.length);
  return x[num];
}
console.log(how_many_even([3,2,1]));
console.log(zero_negativity([3,2,-1]));
console.log(create_dummy_array(4));
console.log(random_choice([20000,3,4,5]));

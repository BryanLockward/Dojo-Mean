function basicOne()
{
  var x=[];
  x.push("coding");
  x.push("dojo");
  x.push("rocks");
  x.pop();
  console.log(x);
}
function basicTwo()
{
  const y=[]
  console.log(y);
  y.push(88);
  console.log(y);
  y.push(99);
  console.log(y);
}
function basicThree()
{
  z=[9, 10, 6, 5, -1, 20, 13, 2]
  console.log(z);
  for(x=0;x<z.length-1;x++){
    console.log(z[x]);
  }
}
function basicFour()
{
  let arr=['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
  for(x=0;x<arr.length;x++)
  {
    if(arr[x].length <=5)
    {
      console.log(arr[x]);
    }
  }
}
function yell(x)
{
  return x.toUpperCase();
}
console.log(yell("hello"));

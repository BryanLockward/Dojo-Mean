let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
let stud;
for(stud in students)
{
   console.log("name: "+students[stud].name + " cohort: "+students[stud].cohort);
}
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

for(key in users)
{
  console.log(key +": ");
  for(let i=0;i<users[key].length;i++)
  {
    let count=i+1;
    let length=users[key][i].first_name.length + users[key][i].last_name.length;
    console.log(count+". "+users[key][i].last_name+", "+users[key][i].first_name+" - "+length);
  }
}
var array=[1,2,3];
while(array.length > 0) {
array.pop();
}
console.log(array);

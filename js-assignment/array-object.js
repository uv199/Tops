/*
-> make data storage for your family and vehicle details of each family member
-> all son of your dada name only
-> all son of father/uncle's (note - me jeni id aapu ana j son na name print thava joiye like uncle nu apu to uncle other wise dada nu apu to dad nu)
-> badha family ni vehicale details like me jeni id apu aa family ni

*/
get_family_name
getFamilyName
GetFamilyName
// let familyDetails ={
//     name :"hiralal",
//     age:12,
//     son:[{
//         id:1
//         name:
//         age:
//         accupation:
//         dob:
//         vehicales:[{name: number:}]
//         son:[{}]
//     },]

// }

// let unc =[{
// a:12
// }]
unc.a;
// let fat=[
//     {a:12},{a:12}
// ]

// fat.map(e=>e.a)
// unc.a

// {
//  id:1
//         name:
//         age:
//         accupation:
//         dob:
//         vehicales:[{name: number:}]
//         son:[{}]
//     }

/*
    data .son.map((e)=>{
        console.log(e.name)
    }) 
    

     */

let familyDetails = {
  name,
  age,
  son: [
    {
      id: 1,
      name,
      age,
      dob,
      occupation,
      vehicleDetails: [{ name, number }],
      child: [
        {
          name,
          age,
        },
      ],
    },
  ],
};

let match = {
  id: 1,
  name,
  age,
  dob,
  occupation,
  vehicleDetails: [{ name, number }],
  child: [
    {
      name,
      age,
    },
  ],
};
let child = match.child.map((e) => {
  console.log(e.name);
});

let newArr = match?.vehicleDetails;

let a = newArr.map();

let d = [{}];
let l = {
  key: {},
};

let a1 = 10;

// if (a1 > 10) {
// }
// if (a1 === 10) {
// }

// if(){

// }else(){

// }

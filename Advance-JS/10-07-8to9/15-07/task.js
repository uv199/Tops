// family tree task

let familyData = {
  name,
  age,
  child: [
    {
      name,
      age,
      occupation,
      vehicalDetails: [{ name, no }],
      child: [{ name, age }],
    },
    {},
  ],
};

[{ a: 20 }, { a: 40 }, { a: 20, b: 20 }, { c: 20, g: 50 }];

let data = {
  name,
  age,
  child: [
    {
      name,
      occupation,
      age,
      vehicalDetails: [
        { name, no },
        { name, no },
      ],
      child: [
        { name, age },
        { name, age },
      ],
    },
  ],
};

/*
1. gradfather name
2. grandfathers 2nd son's name
3. grandfathers 1st sons -> 1st child name
4. grandfathers 3rd sons -> 1st vehical details
*/

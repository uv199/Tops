function bookCar(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("your car");
    }, 2000);
  });
}

async function party(params) {
  let parking = await bookCar();
  console.log("parking", parking);
  startParty();
}

function startParty(params) {
  console.log("party started ");
}
party();

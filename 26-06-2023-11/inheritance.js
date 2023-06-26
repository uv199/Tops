class Hemaxi {
  constructor(city) {
    this.name = "test-1";
    this.city = city;
  }
  print() {
    console.log("my name is perent ");
  }
}

// class newClassName extends oldClass{

// }

class Tej extends Hemaxi {
  constructor(add) {
    super(add);
    this.age = 20;
    this.name = "hemaxi";
  }
  //   print() {
  //     console.log("my name is ");
  //   }
  welcome() {
    console.log("my name is ", this.name);
    super.print();
    console.log("my name is ", this.name, this.age);
    console.log("my city is ", this.city);
  }
  print() {
    console.log("my name is child");
  }
}

// class Nihar extends Hemaxi
// {

// }

let x = new Tej("surat");
x.welcome();
x.print();






==============================================================================

// class a {
//   p1(){}
//   p2(){}
// }

// class b{
//   p2(){}
//   p3(){}
// }

----------------------------------------------------------------
// class common {
//   p2(){}
// }

// class a  extends common{
//   p1(){}
// }

// class b  extends common{
//   p3(){}
// }
----------------------------------------------------------------
// class common {
//  constroctor(get value from child ){
//  this.x=10
//  }
//   p2(){}
// }

// class a  extends common{
//   p1(){
//   this.x
// }
// }

// class b  extends common{
//  constroctor(get value from child use){
//  super(pass value to perents class  ) // to copy all constroctor  value from perents to child
//  }
//   p3(){}
// }
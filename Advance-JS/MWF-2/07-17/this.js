// this keywork represent current object and current class

let obj = {
  name: "urvish v patel",
  subObj: {
    name: " jeetu patek",
    print: function () {
      console.log("My name is ", this.name);
    },
  },
};

// obj.print();
obj.subObj.print();




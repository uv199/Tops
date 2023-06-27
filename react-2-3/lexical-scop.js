{
  //   a;
  var m = 10;
  var n = 10;
  {
    // b;
    {
      var m = 20;
      let n = 20;
      //   c;
    }
    // b;
  }
  console.log(m);
  console.log(n);
  //   c;
}

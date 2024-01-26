let store = {
  cart: {
    cartProduct: [],
    count: 23,
  },
  product: {
    product: [],
    searchText: "",
  },
};


// redux-toolkit => useReducer 
// react-redux => useContaxt



/*

1. create slice
  - name - intialvalue={} - reducer - extraReducer
  export default slice.reducer 

2. create store 
  - reducer => { slicename as key : value as slice } 

3. combined redux with your application
  - import Provider from react-redux
  - import store 
  - give store as a value in attribute of provider  => store = {store}

4. to get data from store 
  - useSelector((store)=>{
          we can get whole store here and return anything from store 
      })

*/

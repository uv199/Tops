/*
redux - state management tool
    - store
    - reducer
    - action
    - dispatch

1. create slice
2. store
3. connect with react project

# dispatch
=> to call reducer 
let dispatch = useDispatch() 
dispatch(action)

# selector
=> to get data from store
let data = useSelector((store)=>{
   return store.sliceName
})

store = {
    cartSlice:{
        cartData:[],
        count:0
    },
    productSlice:{
        product:[],
    }
}

*/

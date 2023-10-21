/*
=> to create cart
=> method = post
=> end point :- /cart/create
=> header token needed
=> data = {
  products: [
    {
      productId: "65015da3c85a089afd5b1c83",
      count: 7,
    },
    {
      productId: "65015da3c85a089afd5b1c82",
      count: 1,
    },
],
};

//-----------------------------------------------------------------
=> to getAll cart
=> method = get
=> end point :- /cart/getAll
=> header token needed

//-----------------------------------------------------------------

=> update user
=> method = post
=> end point :- /user/update/:id
=> data = same as register

//-----------------------------------------------------------------

=> create wishlist
=> method = post
=> end point :- /wishlist/create
=> header token needed
=> data =  {
    products: ["id of porduct"]
}

//-----------------------------------------------------------------
=> to getAll wishlist
=> method = get
=> end point :- /wishlist/getWishListById
=> header token needed 

//-----------------------------------------------------------------
=> update wishlist
=> method = put
=> end point :- /wishlist/update
=> header token needed
=> data =  {
    products: ["id of porduct"],
}

*/

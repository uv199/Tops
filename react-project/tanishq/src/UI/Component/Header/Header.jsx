import React, { useEffect } from 'react'
import TopHeader from './TopHeader'
import BottomHeader from './BottomHeader'
import { fetchCartApi } from '../../../Redux/Cart/cartSlice'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'

export default function Header() {
  const [cookie]=useCookies(["token"]);
  
  const dispatch=useDispatch()

useEffect(()=>{
dispatch(fetchCartApi(cookie.token))
},[]);

  return (
    <div>
        <div>
            <TopHeader/>
            <BottomHeader/>
        </div>
    </div>
  )
}

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../ui/Pages/HomePage'
import AboutCom from '../ui/Pages/AboutUs/AboutCom'
import NewsCom from '../ui/Pages/News/NewsCom'
import SingleNewsCom from '../ui/Pages/News/SingleNewsCom'
import HeaderCom from '../ui/Components/Header/HeaderCom'
import LoginCom from '../ui/Pages/LoginPage/LoginCom'
import LogOut from '../ui/Pages/LoginPage/LogOut'
import PageCom from '../ui/Pages/PagesList/PageCom'
import ContactUs from '../ui/Pages/Contact/ContactUs'
import ShopCom from '../ui/Pages/Shop/ShopCom'
import RegisterCom from '../ui/Pages/RegistrationPage/RegisterCom'
import { Provider as AuthProvider } from 'react-redux'
import { store } from '../redux/app/store'
import Profile from '../ui/Pages/Profile/Profile'
import AllProduct from '../ui/Pages/Admin/Product/AllProduct'
import Dashbord from '../ui/Pages/Admin/Dashbord/Dashbord'
import Users from '../ui/Pages/Admin/Users/User'
import Order from '../ui/Pages/Admin/Order/Order'

export default function Router() {
    return (
        <>
            <AuthProvider store={store}>
                <BrowserRouter>
                    <HeaderCom />
                    <Routes>
                        <Route exact path='/' element={<HomePage />} />
                        <Route exact path='/about' element={<AboutCom />} />
                        <Route exact path='/pages' element={<PageCom />} />
                        <Route exact path='/news' element={<NewsCom />} />
                        {/* <Route exact path='/singlenews' element={<SingleNewsCom />} /> */}
                        <Route exact path='/contact' element={<ContactUs />} />
                        <Route exact path='/shop' element={<ShopCom />} />
                        <Route exact path='/login' element={<LoginCom />} />
                        <Route exact path='/logout' element={<LogOut />} />
                        <Route exact path='/register' element={<RegisterCom />} />
                        <Route exact path='/profile' element={<Profile />} />
                        <Route exact path='/product' element={<AllProduct />} />
                        <Route exact path='/dashboard' element={<Dashbord />} />
                        <Route exact path='/users' element={<Users />} />
                        <Route exact path='/orders' element={<Order />} />


                    </Routes >
                </BrowserRouter>

            </AuthProvider>

        </>
    )
}




import React from 'react'
import HeaderCom from '../Components/Header/HeaderCom'
import FeatureList from '../Pages/FeatureList'
import ProductCom from '../Pages/Products/ProductCom'
import DealCom from './Dealinfo/DealCom'

export default function HomePage() {
    return (
        <>
            {/* <HeaderCom /> */}
            {/* search area */}
            <div className="search-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="close-btn"><i className="fas fa-window-close"></i></span>
                            <div className="search-bar">
                                <div className="search-bar-tablecell">
                                    <h3>Search For:</h3>
                                    <input type="text" placeholder="Keywords" />
                                    <button type="submit">Search <i className="fas fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* hero area */}
            <div className="hero-area hero-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 offset-lg-2 text-center">
                            <div className="hero-text">
                                <div className="hero-text-tablecell">
                                    <p className="subtitle">Fresh & Organic</p>
                                    <h1>Delicious Seasonal Fruits</h1>
                                    <div className="hero-btns">
                                        <a href="shop.html" className="boxed-btn">Fruit Collection</a>
                                        <a href="contact.html" className="bordered-btn">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FeatureList />
            <ProductCom />
            <DealCom />
        </>
    )
}

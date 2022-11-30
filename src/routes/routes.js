import {Route, Routes} from "react-router";
import {LoginPage} from "../layouts/main/LoginPage/LoginPage";
import {useContext, useEffect} from "react";
import {AppContext} from "../context/AppContext";
import {MainPage} from "../layouts/main/MainPage/MainPage";

export const MyRoutes = () => {

    return (
        <>
            <Routes>
                <Route path={'/'} exact element={<MainPage/>}/>

                {/*<Route path={'/products'} exact element={<Products/>}/>*/}

                {/*<Route path={'/cart'} exact element={<Cart/>}/>*/}

                {/*<Route path={'/products/:id'} exact element={<ProductDetail/>}/>*/}
            </Routes>
        </>
    )
}
import {Route, Routes} from "react-router";
import {LoginPage} from "../layouts/main/LoginPage/LoginPage";
import {useUserStatus} from "../myHooks/useUserStatus";

export const MyRoutes = () => {
    // const userStatus = useUserStatus('')
    const userStatus = false
    return (
        <>
            <Routes>
                {userStatus ?
                    <Route path={'/'} exact element={<LoginPage/>}/> :
                    <Route path={'/'} exact element={<LoginPage/>}/>
                }

                {/*<Route path={'/products'} exact element={<Products/>}/>*/}

                {/*<Route path={'/cart'} exact element={<Cart/>}/>*/}

                {/*<Route path={'/products/:id'} exact element={<ProductDetail/>}/>*/}
            </Routes>
        </>
    )
}
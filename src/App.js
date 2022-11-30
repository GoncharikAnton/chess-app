import './App.css';
import {Header} from "./layouts/header/Header";
import {BrowserRouter} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AppContext} from "./context/AppContext";
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {gameSubj} from './Game'
import {MyRoutes} from "./routes/routes";
import {Route} from "react-router";
import {LoginPage} from "./layouts/main/LoginPage/LoginPage";
import {GamePage} from "./layouts/main/GamePage/GamePage";



function App() {
    const AppContexts = useContext(AppContext)
    const [userStatus, setUserStatus] = useState(false)

    return (
        <BrowserRouter>
            <AppContext.Provider value={AppContexts}>
                <DndProvider backend={HTML5Backend}>
                    <div className="App">
                        <Header/>
                        {/*After the board component I'll return to the next part*/}
                        {/*{!AppContexts.userStatus ? <LoginPage*/}
                        {/*    userStatus={userStatus}*/}
                        {/*    setUserStatus={setUserStatus}*/}
                        {/*    /> :*/}
                        {/*    <MyRoutes/>*/}
                        {/*}*/}
                        <GamePage/>
                    </div>
                </DndProvider>
            </AppContext.Provider>
        </BrowserRouter>
    );
}


export default App;

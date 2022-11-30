import Navbar from "../../../components/Navbar/Navbar";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useContext, useState} from "react";
import {AppContext} from "../../../context/AppContext";

export const LoginPage = ({userStatus, setUserStatus}) => {

    const [inputName, setInputName] = useState('');
    const context = useContext(AppContext)
    const inputHandler = (e) => {
        setInputName(e.target.value)
    }

    const buttonHandler = () => {
        context.user = inputName;
        context.userStatus = true;
        localStorage.setItem('user', JSON.stringify({'name': inputName, status: true}));
        setInputName('')
        setUserStatus(true)
    }


    return (
        <div>
            <TextField id="outlined-basic"
                       label="Outlined"
                       variant="outlined"
                       onChange={inputHandler}
                       value={inputName}
            />
            <Button variant="contained"
                    onClick={buttonHandler}
            >Log In</Button>
        </div>
    )
}

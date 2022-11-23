import {useEffect, useState} from "react";

export const useUserStatus = (userId) => {
    const [loggedIn, setLoggedIn] = useState(false);

    const userLoggedIn = (id) => {
        const response = JSON.parse(localStorage.getItem(id));
        if (response && response.onLine){
            setLoggedIn(true);
        }else{
            setLoggedIn(false);
        }
    }
    useEffect(() => {
        userLoggedIn(userId);
    }, [userId]);

    return loggedIn
}
import React from "react";

const defaultContext = {
    themeSrc: './images/defaultTheme.jpg',
    user: '',
    userStatus: false,
    type: '',
    location: '',
    color: ''
};

export const AppContext = React.createContext(defaultContext);

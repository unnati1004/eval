export const ADD_CITY ="ADD_CITY";
export const ADD_COUNTRY = "ADD_COUNTRY";

export const addCity = (todo)=>({type:ADD_CITY, payload:todo});

export const addCountry = (todo)=>({type:ADD_COUNTRY,payload:todo});

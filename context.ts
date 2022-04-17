import React, { useState, useContext, useRef } from "react";

const AppContext = React.createContext(null);

 


 

 export const useGlobalContext = () => {
   return useContext(AppContext);
 };
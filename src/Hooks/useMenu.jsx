import { useEffect, useState } from "react";

const useMenu = () => {

    let [menu, setMenu] = useState([])
    useEffect(() => {
    fetch('http://localhost:5000/menu')
    .then(res => res.json())
    .then(data => setMenu(data)) 
    },[]) 
    
    return [menu]
};

export default useMenu;
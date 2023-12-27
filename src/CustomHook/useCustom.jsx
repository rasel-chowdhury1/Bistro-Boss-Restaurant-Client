import { useEffect, useState } from "react";


const useCustom = () => {
    const [menu,setMenu] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() =>{
        fetch('http://localhost:3000/menus')
        .then(res => res.json())
        .then(data => {
            setMenu(data);
            setLoading(false);
        })
    },[])
    return [menu,loading]
};

export default useCustom;
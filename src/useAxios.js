// import React, {useState, useEffect} from 'react'
//################the above said 'React' is defined but never used
import {useState, useEffect} from 'react'
import axios from 'axios'
import {v1 as uuid} from "uuid";


function useAxios(baseUrl, pokeMon) {
    const [state, setState] = useState([])
//will be updater function in parent component
//if called on PostDex, endpoint in PostDex depends on the name of the pokemon;
    function addObject() {
        async function apiRequest(){
            if (pokeMon) {
                baseUrl = baseUrl + pokeMon
            }
            const response = await axios.get(baseUrl);
            setState(prevState =>
                [...prevState, {data: response.data, id: uuid()}]);
            }
        // apiRequest();
    }
//############should there be a useEffect function since this will be an http request?
    // useEffect(() => {
    //     addObject(baseUrl, pokeMon)

    // }, [baseUrl, pokeMon])
        

    

return [state, addObject]
    
}

export default useAxios
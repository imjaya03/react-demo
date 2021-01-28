import React,{useState, useEffect} from 'react'

import axios from "axios";

export default function Home() {

    const [loading, setLoading] = useState(true);
    const [homeDesign, setHomeDesign] = useState([]);
    const [homeDesignkey, setHomeDesignKey] = useState([]);

    useEffect(() => {
        getDesign();
    },[]);


    async function getDesign() {
        try {
            const response = await axios.get('http://localhost:5000/v1.0/api/get_banner_and_carosel');
           // console.log(response);
            setHomeDesign(response);
            setHomeDesignKey(response.data.design_type)
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    console.log(homeDesign)
    console.log("Set ===> ",setHomeDesignKey)


    return (
        <div>

            {loading ? <>
            loading please wait ....
            
            </>
                :

                <>

                {
                  
                }
                

                
                
                </>



            }



        </div>
    )
}

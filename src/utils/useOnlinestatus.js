import { useEffect,useState } from "react";

const useOnlinestatus=()=>{

    const [Onlinesstatus,SetOnlinestatus]=useState(true);

    useEffect(()=>{



        window.addEventListener("online",()=>{

            SetOnlinestatus(true)
        })
        window.addEventListener("offline",()=>{

            SetOnlinestatus(false);
        })

    })

return Onlinesstatus;

}
export default useOnlinestatus;
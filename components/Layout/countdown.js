
import { useEffect, useState } from "react";
let Countdown = ({ time, max, min,func }) => {
    

    let [count, setcount] = useState(0)
    useEffect(() => { 
        setcount(min)

    },[])
    useEffect(() => {

        let interval;
        interval = setTimeout(() => {

            if (!(count >= max)) {
                setcount(count + 1)
          
                
            } else {
                if (func) {
                    func()
                }
        }
        },time*1000)
        
    },[count])

    return <div>{count}</div>

    
    
}


export default Countdown
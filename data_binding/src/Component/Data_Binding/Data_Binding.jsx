import { useEffect, useState } from "react"

export function DataBinding()
{
    // var username="kaif"; // 1 way (not recommended)
    
    const [uname, setUname]=useState('kaif');
   const [gmail,setGmail]=useState('dalvikaif@gmaail.com')

//   ❌ Never update state directly inside component body
//   ✅ Update state only via events or effects(mounts)
    useEffect(()=>{
        setUname("Mohammed Kaif");
    },[])

    return(
        <div className="container p-4">
            <h1>Data Binding</h1>
           
            {/*
            This is not recommended because, variable is immutable in nature.

            <input type="text" value={uname} />
            <p>Hello - {uname}</p> */}

               
                <p>Hello - {uname}</p>

                {/* If i decalred state but use it use give warning ,but not error .--- React will NOT give a runtime error  */}
                <p>Your email {gmail}</p>
        </div>
    )
}
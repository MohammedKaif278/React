import { ArrayExample } from "../Components/Array/Array";
import { BooleanExample } from "../Components/Boolean/Boolean";
import { ToFixed } from "../Components/Number/toFixed/toFixed";
import { ToLocaleString } from "../Components/Number/ToLocaleString/ToLocaleString";
import { ToPrecision } from "../Components/Number/ToPrecision/ToPrecision";
import { StringExample } from "../Components/String/String";


export function Home()
{
    return(
        <div>
            <ToFixed/>
            ================================================================================================
            <ToPrecision/>
            ================================================================================================
            <ToLocaleString/>
            ================================================================================================
            <BooleanExample/>
             ================================================================================================
             <StringExample/>
             ================================================================================================
             <ArrayExample/>
        </div>
    )
}
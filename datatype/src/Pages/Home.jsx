import { ArrayExample } from "../Components/Array/Array";
import { BooleanExample } from "../Components/Boolean/Boolean";
import { ToFixed } from "../Components/Number/toFixed/toFixed";
import { ToLocaleString } from "../Components/Number/ToLocaleString/ToLocaleString";
import { ToPrecision } from "../Components/Number/ToPrecision/ToPrecision";
import { ArrayOfObject } from "../Components/Object/ArrayOfObject";
import { ObjectExample } from "../Components/Object/Object";
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
             ================================================================================================
             <ObjectExample/>
             ================================================================================================
             <ArrayOfObject/>
        </div>
    )
}
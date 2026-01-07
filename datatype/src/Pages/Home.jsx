import { ToFixed } from "../Components/Number/toFixed/toFixed";
import { ToLocaleString } from "../Components/Number/ToLocaleString/ToLocaleString";
import { ToPrecision } from "../Components/Number/ToPrecision/ToPrecision";


export function Home()
{
    return(
        <div>
            <ToFixed/>
            ================================================================================================
            <ToPrecision/>
            ================================================================================================
            <ToLocaleString/>
        </div>
    )
}
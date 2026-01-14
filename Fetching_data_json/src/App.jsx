
import { AxiosFetch } from "./component/Axios_Promise/AxiosPromise"
import { PFlipkart } from "./component/Fetch_Promise/PFlipkart"
import { Flipkart } from "./component/XMLHttpRequest/Flipkart"


function App() {
 

  return (
   <div className="container">
   <Flipkart />
   <br />
   <br />
   ==========================================================================================================================================================
   <br />
   <br />
   <PFlipkart />
   ==========================================================================================================================================================
   <br />
   <br />
   <AxiosFetch/>
   </div>
  )
}

export default App

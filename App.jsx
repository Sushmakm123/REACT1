import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App=()=>{
    let handlesubmit=()=>{
        toast.success("logged in successfully",{position:toast.POSITION.TOP_CENTER})
    }

return(
    <div>
        <ToastContainer/>
        <button onClick={handlesubmit}>click for message</button>
    </div>
)
}
export default App;

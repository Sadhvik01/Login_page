import React,{ useState } from "react";

  const Loginpage = () =>{
    const [action,setAction] = useState("Login");

    return(

 <div className="container"> 
            <div className="header">
                <div className="sign">{ action }</div>
                <div className="underline"></div>

            </div>
<form>
        
  <div className="text">
    {action==="Login"?<div></div>:<div className="inputs">
        <input type = "text" placeholder="Enter your name"/>
        </div>}

  <div className="inputs">
   <input type="text" placeholder="Enter yopur Email id"/>
   </div>

       <div className="inputs"><input type="text" placeholder="Enter your password"/>
       </div>
      </div>
</form>
           
            <div className="forgot-pwd">Lost pwd? <span className="spn">click Here!</span>
            </div>
            <div className="buttons-container">
        <button className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</button>
        <button className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</button>
           </div>
       
        </div>

    );
};
export default Loginpage;
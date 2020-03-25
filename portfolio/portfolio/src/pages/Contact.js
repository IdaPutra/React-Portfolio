import React from "react";
import "./style.css";
import {Navbar} from "../components/Navbar"



function Contact (){

return(
<div>
<Navbar/>
    <div className="container" style={{marginTop:"5%", marginRight:"33%", width:"40%", height:"50%"}}>
    <div class="card" style={{ height:"400px", borderRadius:"10px"}}>
  <div class="card-body">
  
  <form>
                                                    <div class="form-group">
                                                      <label for="exampleFormControlInput1">Name</label>
                                                      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=" e.g name:Bruce Wayne"></input>
                                                    </div>
                                                    <div class="form-group">
                                                            <label for="exampleFormControlInput1">Email address</label>
                                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                                                    </div>
                                                    <div class="form-group">
                                                      <label for="exampleFormControlTextarea1">Message</label>
                                                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                    </div>
                                                  </form>
                                                  <a href="#" class="btn btn-primary">Submit</a>
      
     </div>
  </div>
</div>
    </div>






)




}



export default Contact
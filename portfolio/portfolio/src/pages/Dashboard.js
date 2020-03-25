import React from "react";
import "./style.css";
import {Navbar} from "../components/Navbar"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";



function Dashboard (){

return(
<div>
<Navbar/>
    <div className="container" style={{marginTop:"5%", marginRight:"24%", width:"60%", height:"50%"}}>
    <div class="card" style={{ height:"600px", borderRadius:"10px"}}>
  <div class="card-body">
  <div class="row">
                                                  <div class="col-lg-4 col-sm-4">
                                                        <div class="jumbotron jumbotron-fluid ">
                                                            
                                                          <a class="nav-link" id= "text"  href="https://idaputra.github.io/assignment-3/">Password Generator</a>
                                                                
                                                        </div>
                                                        
                                                </div>
                                               
                                                <div class="col-lg-4 col-sm-4">
                                                        <div class="jumbotron jumbotron-special">
                                                          <a class="nav-link" id= "text" href="https://idaputra.github.io/assigntment6-final/">Weather dashboard</a>
                                                       
                                                </div>

                                            </div>
                                               
                                            <div class="col-lg-4 col-sm-4">
                                                    <div class="jumbotron jumbotron-special1">
                                                      <a class="nav-link" id= "text" href="https://idaputra.github.io/Project1/.">Project Donut</a>
                                                   
                                            </div>
                                        </div>
                                    </div>  
                                    <div class="row">
                                              <div class="col-lg-4 col-sm-4">
                                                    <div class="jumbotron jumbotron-special2 ">
                                                            <div class="row-lg-4 row-sm-12">
                                                            <p></p>
                                                        </div>    
                                                    </div>
                                                    
                                            </div>
                                           
                                            <div class="col-lg-4 col-sm-4">
                                                    <div class="jumbotron jumbotron-special3">
                                                            <p></p>
                                                   
                                            </div>

                                        </div>
                                           
                                        <div class="col-lg-4 col-sm-4">
                                                <div class="jumbotron jumbotron-special4">
                                                        <p></p>
                                               
                                        </div>  
                                        
                                        </div>
                                    </div>  


      
     </div>
  </div>
</div>
<MDBFooter color="blue" className="font-small pt-4 mt-4">
    
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="Github"> Github.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>






)




}



export default Dashboard
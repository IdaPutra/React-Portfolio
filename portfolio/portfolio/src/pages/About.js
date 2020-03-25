import React from "react";
import "./style.css";
import {Navbar} from "../components/Navbar"



function About (){

return(
<div>
<Navbar/>
    <div className="container" style={{marginTop:"5%", marginRight:"33%", width:"40%", height:"50%"}}>
    <div class="card" style={{ height:"400px", borderRadius:"10px"}}>
  <div class="card-body">
  <img src={require('../images/profile.jpg')} style={{borderRadius:"100%", height:"55%",marginLeft:"38%"}}></img>
  <br></br>
  <br></br>
  <br></br>
  <p>My name is Ida i am currently studying in Monash university majoring in banking and finance. I live in Bali, Indonesia ive been in melbourne for 3 years and planning to take a graduate degree in finance.</p>
    <p class="mb-0">My hobbies are sports and music, i enjoy the fight game mostly such as boxing and UFC as i am currently competing in that particular sport as well.I am born im march 15 and i am a pisces.</p>
      
       
      
     </div>
  </div>
</div>
    </div>






)




}



export default About
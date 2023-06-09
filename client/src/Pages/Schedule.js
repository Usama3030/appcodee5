import React from "react";
import { useState } from "react";
import Axios from "axios";

import "./style.css";
//styleline 65
//serverline 100


const Schedule = () => {
  

  const [name, setName] = useState("");
  const [classs, setClass] = useState("");
  const [section, setSection] = useState("");
  const [session, setSession] = useState("");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");
  const [stime, setSTime] = useState("");
  const [ftime, setFTime] = useState("");
  const [id ] = useState(0);


  const [timetablestatus, setTimetableStatus] = useState([]);

  
  const addtimetable = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8080/createschedule", {
      name: name,
      classs: classs,
      section: section,
      session: session,
      semester: semester,
      subject: subject,
      stime: stime,
      ftime: ftime,
    
      
    }).then((response) =>{
      if(response.data.message){
        setTimetableStatus(response.data.message);
      }else{
        setTimetableStatus("Data Inserted successfully");
      }
    })
  };



  return (
    <div className='schedule'>
     <div className="row">
          <div className="col-md-12 p-1 ">
            <div className="header justify-content-around align-items-center">
           <h3>TimeTable</h3>
            </div>
            </div>
          </div>
       <div class="container mt-4" >
    <form class="row g-3">
  <div class="col-md-6">
    <label for="inputname" class="form-label">Professor Name</label>
    <input type="text" class="form-control" id="inputname" 
    onChange={(event) => {
      setName(event.target.value);
    }}
     required 
    />
  </div>
  <div class="col-md-6">
    <label for="inputclass" class="form-label">CLass</label>
    <input type="text" class="form-control" id="inputclass" 
    onChange={(event) => {
      setClass(event.target.value);
    }}
     required 
     />
  </div>
  <div class="col-4">
    <label for="inputsec" class="form-label">Section</label>
    <input type="text" class="form-control" id="inputsec" placeholder="reg/Self" 
    onChange={(event) => {
      setSection(event.target.value);
    }}
     required 
     />
  </div>
  <div class="col-4">
    <label for="inputsession" class="form-label">Sesssion</label>
    <input type="text" class="form-control" id="inputsession" placeholder="" 
    onChange={(event) => {
      setSession(event.target.value);
    }}
     required 
     />
  </div>
  <div class="col-4">
    <label for="inputsemester" class="form-label">Semester</label>
    <input type="text" class="form-control" id="inputsemester" placeholder="" 
     onChange={(event) => {
      setSemester(event.target.value);
    }}
     required
     />
  </div>
  <div class="col-4">
    <label for="inputsubject" class="form-label">Subject</label>
    <input type="text" class="form-control" id="inputsubject" placeholder="" 
     onChange={(event) => {
      setSubject(event.target.value);
    }}
     required
     />
  </div>
  <div class="col-md-2">
  <label for="start-time-input">Start Time:</label>
  <input type="time" class="form-control" id="start-time-input" name="start-time" 
  onChange={(event) => {
    setSTime(event.target.value);
  }}
   required 
   />
    </div>
    <div class="col-md-2">
  <label for="end-time-input">End Time:</label>
  <input type="time" class="form-control" id="end-time-input" name="end-time" 
  onChange={(event) => {
    setFTime(event.target.value);
  }}
   required 
   />
  </div>
  
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="buttonschedule">
    <div className="row">
  <div class="col-12">
    <button type="submit" class="btn btn-primary justify-content-around align-items-center rounded"  style={{}} onClick={addtimetable} >Submit</button>
  </div>
  </div>
  </div>
  <h4 style={{color:'Green', fontSize:'40px', textAlign:'center', marginTop:'20px'}}>{timetablestatus}</h4>
</form>
</div>










</div>
  )
}

export default Schedule

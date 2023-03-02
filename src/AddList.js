import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from "@mui/material";
import { API } from "./global";
import { useNavigate } from "react-router-dom";





export function AddList() 
{
  // Declaring the variable 
  const [name,setName]=useState('');
  const [poster,setPoster]=useState('');
  const [email,setEmail]=useState('');
  const [phoneno,setPhoneno]=useState('');
  const [badge,setBadge]=useState('');
 
  //navigate to the list page
 const navigate=useNavigate()

  return (
    <Container fixed>
    <div className="addlist-style">
      
      <TextField id="outlined-basic" label="Enter Name" variant="outlined"  onChange={(e)=> setName(e.target.value)}/>
      <TextField id="outlined-basic" label="Enter Poster" variant="outlined"  onChange={(e)=> setPoster(e.target.value)}/>
      <TextField id="outlined-basic" label="Enter Email" variant="outlined"  onChange={(e)=> setEmail(e.target.value)}/>
      <TextField id="outlined-basic" label="Enter Phone" variant="outlined"  onChange={(e)=> setPhoneno(e.target.value)}/>
      <TextField id="outlined-basic" label="Enter Badge" variant="outlined"  onChange={(e)=> setBadge(e.target.value)}/>
      <Button 
      variant="contained" 
      onClick={()=>
      {
        const newList={
            name:name,poster:poster,email:email,phoneno:phoneno,badge:badge
        };
        fetch(`${API}/list`,
        {
          method:'POST',
          body:JSON.stringify(newList),
          headers:{
            "content-type":"application/json"
          }
        }).then(()=> navigate(`/list`))
      }}  
      >Add list</Button>
    </div>
    </Container>

  );
}

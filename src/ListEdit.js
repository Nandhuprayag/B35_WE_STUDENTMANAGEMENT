import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "./global";
import TextField from '@mui/material/TextField';
import { NearMeDisabledSharp } from "@mui/icons-material";
import Button from '@mui/material/Button';


export function ListEdit() 
{
   const {id}=useParams()
   
   const [list,setList]=useState(null)
    useEffect(()=>{
      fetch(`${API}/list/${id}`,
      {
        method:'GET'
      })
      .then(response=> response.json())
      .then(data => {
        setList(data)
        console.log(data)
      })
    },[])


  return (
    <Container>
      {list ? <ListEditForm List={list}/>:"Loading ..."}
    </Container>
    
  );
}


function ListEditForm({List})
{
   // Declaring the variable 
   const [name,setName]=useState(List.name);
   console.log(name)
   const [poster,setPoster]=useState(List.poster);
   const [email,setEmail]=useState(List.email);
   const [phoneno,setPhoneno]=useState(List.phoneno);
   const [badge,setBadge]=useState(List.badge);

   const navigate=useNavigate()
  return(
    <div className="addlist-style">
      <TextField id="outlined-basic" value={name} label="Enter Name" variant="outlined"  onChange={(e)=> setName(e.target.value)}/>
      <TextField id="outlined-basic" value={poster} label="Enter Poster" variant="outlined"  onChange={(e)=> setPoster(e.target.value)}/>
      <TextField id="outlined-basic" value={email} label="Enter Email" variant="outlined"  onChange={(e)=> setEmail(e.target.value)}/>
      <TextField id="outlined-basic" value={phoneno} label="Enter Phone" variant="outlined"  onChange={(e)=> setPhoneno(e.target.value)}/>
      <TextField id="outlined-basic" value={badge} label="Enter Badge" variant="outlined"  onChange={(e)=> setBadge(e.target.value)}/>
      <Button 
      variant="contained" 
      onClick={()=>
      {
        const updateList={
            name:name,poster:poster,email:email,phoneno:phoneno,badge:badge
        };
        fetch(`${API}/list/${List.id}`,
        {
          method:'PUT',
          body:JSON.stringify(updateList),
          headers:{
            "content-type":"application/json"
          }
        }).then(()=> navigate(`/list`))
      }}  
      >Save</Button>
    </div>
  )
}
import { Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "./global";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { textAlign } from "@mui/system";





export function ListDetails() 
{
   const {id}=useParams();

    const[list,setList]=useState({})
    

    useEffect(()=>{fetch(`${API}/list/${id}`,
      {
        method:"GET",
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setList(data)
      })
    },[])
    
    //  once see the details and naviagte to main lists
const navigate=useNavigate()
   
  return (
    <Container fixed>
      {/* <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
       
        <img src={list.poster} width="345"/>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {list.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {list.email}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {list.phoneno}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {list.badge}
          </Typography>
        </CardContent>
        <Button variant="contained" 
        id='btn-style'
        startIcon={<ArrowBackIosNewIcon/>}
        onClick={()=> navigate(-1)}>
          BACK
        </Button>
      </CardActionArea>
    </Card> */}
        <div className='listdetails-style'>
           <img src={list.poster}/>
        <div className='list-spec'>
              <h1><strong>Name: </strong>{list.name} </h1>
              <h3><strong>Email: </strong>{list.email}</h3>
              <h4><strong>Phone: </strong>{list.phoneno}</h4>
              <h5><strong>Badge: </strong>{list.badge} -  {id}</h5>
        </div>
        <div className='list-spec'>
        <Button variant="contained" startIcon={<ArrowBackIosNewIcon />}
        onClick={()=>navigate(-1)}
        
        >
 Back
</Button>
        </div>
     
      </div>
    </Container>
    
  );
}

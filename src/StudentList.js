import { Container, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { API } from "./global";
import { List } from "./List";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";




export function StudentList() 
{
  // fetch the API data from the server
  const[student,setStudentlist]=useState([])

 const getList=()=>
 {
  fetch(`${API}/list`,{method:'get'
    }).then(response => response.json())
    .then(data => {
      setStudentlist(data)
      console.log(data)
    })
    .catch((err)=> console.error(err))
 }

  useEffect(()=>getList(),[])

  // need to navigate to the edit page
  const navigate=useNavigate()
  return (
    <Container fluid>
      <div className="list-layout">
        {student.map((item, index) =>(
        <List list={item} key={index} id={item.id}
         editButton={
          <IconButton onClick={()=> 
           navigate(`/list/edit/${item.id}`)
          }>
            <EditIcon color="warning"/>
          </IconButton>
         }
        
         deleteButton={
          <IconButton
           onClick={()=>
            fetch(`${API}/list/${item.id}`,
            {
              method:'DELETE'
            })
            .then(response => response.json())
            .then(data => {
              console.log(data)
                getList(data)
            })}>
            <DeleteIcon color="error"/>
          </IconButton>
         }
        
        
        />
        ))}
     </div>
    </Container>
    
  );
}



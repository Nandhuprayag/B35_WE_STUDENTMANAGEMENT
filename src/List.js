import Container from '@mui/material/Container';
import InfoIcon from '@mui/icons-material/Info';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export function List({list,editButton,deleteButton, id}) 
{

  const navigate=useNavigate()
  return (
    <Container fixed>
      <div className="list-container">
        <img src={list.poster} alt={list.poster} className='list-poster'/> 
        <div className='list-spec'>
              <h1><strong>Name: </strong>{list.name} <span> <IconButton color='primary' size='large'
              onClick={()=> navigate(`/list/${id}`)}
              ><InfoIcon/></IconButton></span></h1>
              <h3><strong>Email: </strong>{list.email}</h3>
              <h4><strong>Phone: </strong>{list.phoneno}</h4>
              <h5><strong>Badge: </strong>{list.badge} -  {id}</h5>
        </div>
        <div>
             {editButton}
             {deleteButton}
        </div>
      </div>
      </Container>
    );
}

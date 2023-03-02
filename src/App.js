import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import img from './img.png'
import altimg from'./altimg.png';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from './Home';
import { NotFoundPage } from './NotFoundPage';
import {API} from './global'
import { StudentList } from './StudentList';
import { AddList } from './AddList';
import { ListDetails } from './ListDetails';
import { ListEdit } from './ListEdit';


function App() 
{
  //Swithcing mode by using state technique
  const [mode,setMode]=useState('dark')


  //Apply dark/light theme in the application
  const Theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  // declare of navigation 
  const navigate=useNavigate()

  return (
    <ThemeProvider theme={Theme}>
    <CssBaseline />
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
    <Toolbar  className='toolbar-style'>
        <div>
          <img src={img} alt={altimg} className='App-logo'/>
        </div>
        <div>
        <Button color='inherit' onClick={()=>navigate(`/home`)}>Home</Button>
        <Button color='inherit' onClick={()=>navigate(`/list`)}>List</Button>
        <Button color='inherit' onClick={()=>navigate(`/list/add`)}>Add List</Button>
        <IconButton 
        color='inherit'
        onClick={()=> setMode(mode === 'dark'?'light':'dark')}>{mode ==='dark' ? <LightModeIcon/>:<DarkModeIcon/>}</IconButton>
         </div>
    </Toolbar>
    </AppBar>
       
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/404' element={<NotFoundPage/>}/>
      <Route path='/list' element={<StudentList/>}/>
      <Route path='/list/add' element={<AddList/>}/>
      <Route path='/list/:id' element={<ListDetails/>}/>
      <Route path='/list/edit/:id' element={<ListEdit/>}/>
      <Route path='*' element={<Navigate replace to='/404'/>}/>
    </Routes>
   
    </Box>
    </ThemeProvider>
  );
}

export default App;

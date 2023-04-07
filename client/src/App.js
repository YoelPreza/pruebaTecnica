import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import UploadFile from './components/UploadFile';
import Navbar from './components/Navbar';

import { Container } from "@mui/material";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<UploadFile />} />
          <Route path='/tasks/view' element={<TaskList />} />
          <Route path='/tasks/new' element={<TaskForm />} />
          <Route path="/tasks/:id/edit" element={<TaskForm />} />

        </Routes>
      </Container> 
    </BrowserRouter>

  )
}

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider,createTheme } from '@mui/material';
import Cart from './components/Cart/Cart';
import Todos from './components/Todos/Todos';
function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/todos' element={<Todos/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

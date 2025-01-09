import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//layout
import DefaultLayout from './layout/defaultLayout';
//pages
import BooksPage from './pages/BooksPage';
import FormPage from './pages/FormPage';
import ContactUs from './pages/contactUs';
import AboutUs from './pages/aboutUs';
import BookPage from './pages/BookPage';
function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route index element={<BooksPage/>}/>
            <Route path="/books/:id" element={<BookPage/>}/>
            <Route path="/addNewBook" element={<FormPage/>}/>
            <Route path="/contactus" element={<ContactUs/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App
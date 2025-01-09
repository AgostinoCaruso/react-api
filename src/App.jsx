import './App.css';
import { BrowserRouter } from 'react-router-dom';
//layout
import defaultLayout from './layout/defaultLayout';
//pages
import FormPage from './pages/FormPage';
import contactUs from './pages/contactUs';
import aboutUs from './pages/aboutUs';

import Header from './components/Header';
import BooksPage from './pages/BooksPage';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route component={defaultLayout}>
            <Route index component={HomePage}/>
            <Route path="/books" component={BooksPage}/>
            {/* <Route path="/books/:id" component={}/> */}
            <Route path="/addNewBook" component={FormPage}/>
            <Route path="/contactus" component={contactUs}/>
            <Route path="aboutus" component={aboutUs}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App

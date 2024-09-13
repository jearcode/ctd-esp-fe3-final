import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";
import Favs from "./pages/Favs";
import { GlobalContext } from "./context/Context";
import { useContext } from "react";
import ScrollToTop from "./Components/ScrollToTop";
import NotFound from "./pages/NotFound";
function App() {

  const {state} = useContext(GlobalContext)
  const theme = state.userData.theme.toLowerCase();

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contacto' element={<Contact/>}/>
        <Route path='/dentist/:id' element={<Detail/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

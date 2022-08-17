import "./app.css"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div className='app'>
        <Router>
            <Header/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="movie/:id" element={<h1>hel56</h1>}/>
                <Route path="movies/:type" element={<h1>movie de</h1>}/>
                <Route path="/*" element={<h1>Error</h1>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App;

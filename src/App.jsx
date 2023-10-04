import Navbar from './components/Navbar';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Blogs from './pages/Blogs';
import CreateBlog from './pages/CreateBlog';
import DetailBlog from './pages/DetailBlog';


function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Blogs />} />
            <Route path='/create' element={<CreateBlog />} />
            <Route path='/blog/:id' element={<DetailBlog />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

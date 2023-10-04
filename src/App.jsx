import Navbar from './components/Navbar';
import './styles/App.css';
import Blogs from './pages/Blogs';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Blogs />
      </div>
    </div>
  )
}

export default App

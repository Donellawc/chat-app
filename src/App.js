import './App.css';
import {Router, Routes, BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/chat/:roomID" element={<ChatPage />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
}
      
   
  


export default App;

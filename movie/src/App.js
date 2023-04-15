import Home from './Componet/Home';
import Genre from './Componet/Genre';
import Types from './Componet/Types';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genre" element={<Genre />}>
          <Route path=':genreType' element={<Types />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;

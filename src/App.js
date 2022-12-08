import MainPage from "./pages/MainPage";
import 'antd/dist/antd.css';
import CreatePage from "./pages/CreatePage";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/create' element={<CreatePage/>}/>
        <Route path='/edit/:id' element={<CreatePage/>}/>
      </Routes>
  );
}

export default App;

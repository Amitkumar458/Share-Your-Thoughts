import './App.css';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import ToDo from './feature/ToDoList/ToDo';
import Posts from './feature/posts/Posts';
function App() {
  return (
    <Router>
      <Routes>
          <Route path='/todo' element={<ToDo/>}/>
          <Route path='/share-your-thoughts' element={<Posts/>}/>
      </Routes> 
    </Router>
  );
}

export default App;

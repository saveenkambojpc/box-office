import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Show from "./pages/Show";
import Starred from "./pages/Starred";

const routes = [
  {path: "/",component:<Home/>},
  {path: "/starred", component: <Starred />},
  {path: "/show/:id",component:<Show />},
  {path: null, component:"404 Not Found please create it first"}, //keep it is last
]




function App() {
  return (
    <Router>
      <Navbar />

      <Switch>

        {
          routes.map(e=><Route key={e.path} exact path={e.path}>{e.component}</Route>)
        }
      

      </Switch>
    </Router>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Starred from "./pages/Starred";

const routes = [
  {path: "/",component:<Home/>},
  {path: "/starred",component:<Starred/>},
  {path: null, component:"404 Not Found"}
]


function App() {
  return (
    <Router>
      <Navbar />

      <Switch>

        {
          routes.map(e=><Route key={e.path} exact path={e.path}>{e.component}</Route>)
        }
        {/* <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/starred">
          <Starred />
        </Route>

        <Route>
          404 Page Not found
        </Route> */}

      </Switch>
    </Router>
  );
}

export default App;

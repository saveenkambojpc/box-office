import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Show from "./pages/Show";
import Starred from "./pages/Starred";
import { ThemeProvider } from "styled-components";
import Title from "./components/Title";

const routes = [
  { path: "/", component: <Home /> },
  { path: "/box-office", component: <Home /> },
  { path: "/starred", component: <Starred /> },
  { path: "/show/:id", component: <Show /> },
  // { path: null, component: "404 Not Found please create it first" }, //keep it is last
]


const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
    white:'rgb(255,255,255)'
  },
};


function App() {
  return (
    // Just like CONTEXT API
    <ThemeProvider theme={theme}>
      <Router>
        <Title title="Box Office" subTitle="Are you looking for a movie or an actor?" />

        <Navbar />

        <Switch>
          {
            routes.map(e => <Route key={e.path} exact path={e.path}>{e.component}</Route>)
          }
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

import "animate.css";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const App: React.FC = () => (
  <Router>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Router>
);

export default App;

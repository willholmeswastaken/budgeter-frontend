import "animate.css";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import { Header } from "./components/Header";

const App: React.FC = () => (
  <>
    <Header />
    <Router>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  </>
);

export default App;

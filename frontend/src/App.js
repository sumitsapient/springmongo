import logo from "./logo.svg";
import "./App.css";
import { AddEmployee } from "./components/AddEmployee";
import { Table } from "./components/Table";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={AddEmployee} />
      <Route exact path="/view" component={Table} />
    </Router>
  );
}

export default App;

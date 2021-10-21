import "./App.css";
import CountryContainer from "./Components/CountryContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./Components/About";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/country" component={CountryContainer} />
        <Route exact path="/cualquiercosa" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

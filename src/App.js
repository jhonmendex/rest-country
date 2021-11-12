import "./App.css";
import CountryContainer from "./Components/CountryContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./Components/About";
import Layout from "./Components/Layout";
import Datos from "./Components/Datos";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={CountryContainer} />
          <Route exact path="/about" component={About} />
          <Route exact path="/datos" component={Datos} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

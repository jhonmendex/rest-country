import "./App.css";
import CountryContainer from "./Components/CountryContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./Components/About";
import Layout from "./Components/Layout";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={CountryContainer} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

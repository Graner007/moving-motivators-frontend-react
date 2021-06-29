import Login from "./components/Login";
import Registration from "./components/Registration";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import CardContainer from "./components/cards/CardContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/login" />;
          }}
        />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/cards" component={CardContainer} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;

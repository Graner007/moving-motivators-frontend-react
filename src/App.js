import Login from "./components/user/Login";
import Registration from "./components/user/Registration";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import CardContainer from "./components/cards/CardContainer";
import Footer from "./components/Footer";
import QuestionGroupConatiner from "./components/questions/QuestionGroupContainer";
import QuestionContainer from "./components/questions/QuestionContainer";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/login" />;
            }}
          />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/:groupName/:question/cards" component={CardContainer} />
          <Route path="/question-groups" component={QuestionGroupConatiner} />
          <Route path="/:groupName/questions" component={QuestionContainer} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

import Login from "./components/user/Login";
import Registration from "./components/user/Registration";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import CardContainer from "./components/cards/CardContainer";
import Footer from "./components/Footer";
import QuestionGroupConatiner from "./components/questions/QuestionGroupContainer";
import QuestionContainer from "./components/questions/QuestionContainer";

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
        <Route path="/question-groups" component={QuestionGroupConatiner} />
        <Route path="/questions" component={QuestionContainer} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;

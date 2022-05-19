import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import AllModels from "./pages/AllModels";
import ModelDetail from "./pages/ModelDetail";
import NewModelpage from "./pages/NewModelPage";
import Layout from "./components/layout/Layout";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import NewJobPage from "./pages/NewJobPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="/" exact>
          <Redirect to="/models" />
        </Route>
        <Route path="/models" exact>
          <AllModels />
        </Route>
        <Route path="/models/:modelId">
          <ModelDetail />
        </Route>
        <Route path="/new-model">
          <NewModelpage />
        </Route>
        <Route path="/NewJobPage">
          <NewJobPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;



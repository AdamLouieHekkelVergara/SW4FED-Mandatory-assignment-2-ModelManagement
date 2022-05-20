import "./App.css";
import { Route, Routes, Switch, Redirect } from "react-router-dom";
import AllModels from "./pages/AllModels";
import ModelDetail from "./pages/ModelDetail";
import NewModelpage from "./pages/NewModelPage";
import Layout from "./components/layout/Layout";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import NewJobPage from "./pages/NewJobPage";
import NewManagerPage from "./pages/NewManagerPage";
import SeeJobsPage from "./pages/SeeJobsPage";
import JobAddPropertiesPage from "./pages/JobAddPropertiesPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import useAuth from "./hooks/useAuth";
import RequireAuth from "./components/Auth/RequireAuth";

function App() {
  const { auth } = useAuth();
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

        <Route element={<RequireAuth />}>
          <Route path="/new-manager">
            <NewManagerPage />
          </Route>
        </Route>

        
        <Route path="/seeJobs">
          <SeeJobsPage />
        </Route>
        <Route path="/JobAddPropertiesPage">
          <JobAddPropertiesPage />
        </Route>
        <Route path="/JobDetails">
          <JobDetailsPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;



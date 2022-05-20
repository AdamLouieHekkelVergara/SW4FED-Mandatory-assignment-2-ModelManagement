import "./App.css";
import { Route} from "react-router-dom";
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
import RequireAuth from "./components/Auth/RequireAuth";
import RequireManagerRole from "./components/Auth/RequireManagerRole";

function App() {
  return (

    <Layout>
      <Route path="/auth">
        <AuthPage />
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>

      <RequireAuth path="/">
        <Route path="/models" exact>
          <AllModels />
        </Route>
        <Route path="/models/:modelId">
          <ModelDetail />
        </Route>
        <RequireManagerRole parth="/monew-model">
          <Route path="/new-model">
            <NewModelpage />
          </Route>
        </RequireManagerRole>
        <RequireManagerRole parth="/NewJobPage">
          <Route path="/NewJobPage">
            <NewJobPage />
          </Route>
        </RequireManagerRole>

        <RequireManagerRole path="/new-manager">
          <Route path="/new-manager">
            <NewManagerPage />
          </Route>
        </RequireManagerRole>

        <Route path="/seeJobs">
          <SeeJobsPage />
        </Route>
        <Route path="/JobAddPropertiesPage">
          <JobAddPropertiesPage />
        </Route>
        <Route path="/JobDetails">
          <JobDetailsPage />
        </Route>
      </RequireAuth>
    </Layout>

  );
}

export default App;



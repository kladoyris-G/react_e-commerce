import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/routes/App_routes";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

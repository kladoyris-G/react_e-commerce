import "./App.css";
import Header from "./components/header/Header";
import NotificationBanner from "./components/notification_banner/Notification_banner";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/routes/App_routes";

function App() {
  return (
    <Router>
      <NotificationBanner></NotificationBanner>
      <Header />
      <AppRoutes />
    </Router>
  );
}

export default App;

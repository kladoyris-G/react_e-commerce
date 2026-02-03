import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import NotificationBanner from "@components/notification_banner/Notification_banner";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <NotificationBanner />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

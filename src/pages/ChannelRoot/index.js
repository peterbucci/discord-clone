import { Outlet, useLocation, Navigate } from "react-router-dom";

export default function ChannelRoot() {
  const location = useLocation();
  const path = location.pathname.replaceAll("/", "").toLowerCase();
  return path === "channels" ? (
    <Navigate replace to="/channels/@me" />
  ) : (
    <Outlet />
  );
}

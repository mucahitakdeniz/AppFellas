import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MyFlights from "../pages/MyFlights";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myflights" element={<MyFlights />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;

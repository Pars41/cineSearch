import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import PrivateRouter from "./PrivateRouter";
import MovieDetail from "../pages/MovieDetail";
import Movies from "../pages/Movies";
import LoginPage from "../pages/LoginPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<LoginPage />} />

        <Route path="main" element={<PrivateRouter />}>
          <Route path="" element={<Movies />} />
          <Route path=":id" element={<MovieDetail />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

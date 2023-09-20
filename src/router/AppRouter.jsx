import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import MovieDetail from "../pages/MovieDetail";
import Movies from "../pages/Movies";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="movies" element={<PrivateRouter />}>
          <Route path="" element={<Movies />} />
          <Route path=":id" element={<MovieDetail />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

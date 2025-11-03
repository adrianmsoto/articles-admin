import { Route, Routes } from "react-router-dom";
import MainLayout from "../shared/layout/MainLayout";
import Home from "../features/home/ui/Home";
import CategoryView from "../features/articles/ui/CategoryView";
import { Suspense, lazy } from "react";

// Lazy imports
const Articles = lazy(() => import("../features/articles/ui/Articles"));
const ArticleDetail = lazy(
  () => import("../features/articles/ui/ArticleDetail")
);
const Favorites = lazy(() => import("../features/articles/ui/Favorites"));
const ArticleForm = lazy(() => import("../features/articles/ui/ArticleForm"));

function AppRoutes() {
  return (
    <Suspense fallback={<p>Loading page...</p>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/new" element={<ArticleForm />} />
          <Route path="articles/edit/:id" element={<ArticleForm />} />
          <Route path="articles/:id" element={<ArticleDetail />} />
          <Route path="favorites" element={<Favorites />} />
          <Route
            path="/articles/categories/:category"
            element={<CategoryView />}
          />
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;

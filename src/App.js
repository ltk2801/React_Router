import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetail";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // index router, xác định router mặc định
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      // Sử dụng Dynamic Routes :
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
  // Có thể thêm vài router root khác ở đây ! Example
  // {
  //   path: '/admin',
  //   children: [...]
  // }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

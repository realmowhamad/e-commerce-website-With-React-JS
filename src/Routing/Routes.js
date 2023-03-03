import Product from "../Components/Product/Product";
import ProductDetail from "../Components/ProductDetail/ProductDetail";
import Checkout from "../Pages/Checkout/Checkout";
import Mainpage from "../Pages/Mainpage/Mainpage";


const routes = [
    { path: "/", element: <Mainpage /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/category/:title", element: <Product /> },
    { path: "/product/:id", element: <ProductDetail /> },


]
export default routes
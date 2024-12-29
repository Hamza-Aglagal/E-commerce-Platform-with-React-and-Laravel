
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/utility/Footer';
import NavbarLogin from './Components/utility/NavbarLogin';
import HomePage from './Page/Home/HomePage';
import LoginPage from './Page/Auth/LoginPage';
import Register from './Page/Auth/Register';
import AllCategoryPage from './Page/Category/AllCategoryPage';
import AllBrand from './Page/Brand/AllBrand';
import ShopProductsPage from './Page/Products/ShopProductsPage';
import ProductDetailsPage from './Page/Products/ProductDetailsPage';
import CartPage from './Page/Cart/CartPage';
import PayMethodPage from './Page/Checkout/PayMethodPage';
import AdminAllProductsPage from './Page/Admin/AdminAllProductsPage';
import AdminAllOrdersPage from './Page/Admin/AdminAllOrdersPage';
import AdminOrderDetailsPage from './Page/Admin/AdminOrderDetailsPage';
import AdminAddBrandPage from './Page/Admin/AdminAddBrandPage';
import AdminAddCategoryPage from './Page/Admin/AdminAddCategoryPage';
import AdminAddSubCategoryPage from './Page/Admin/AdminAddSubCategoryPage';
import AdminAddProductPage from './Page/Admin/AdminAddProductPage';
import UserProfilePage from './Page/User/UserProfilePage';
import UserAllOrdersPage from './Page/User/UserAllOrdersPage';
import UserFavoriteProductsPage from './Page/User/UserFavoriteProductsPage';
import UserHelpPage from './Page/User/UserHelpPage';
import { ToastContainer } from 'react-toastify';
import AdminUpdateProductPage from './Page/Admin/AdminUpdateProductPage';
import ProtectedAdmin from './Components/Protected/ProtectedAdmin';
import ProtectedClients from './Components/Protected/ProtectedClients';
import ResetPassword from './Components/utility/ResetPassword';



function App() {
  return (
    <div>


      <NavbarLogin />
      <ToastContainer />

      <BrowserRouter>
        <Routes>

          <Route index element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/reset-password/token/:token' element={<ResetPassword />} />

          <Route path='/Allcategory' element={<AllCategoryPage />} />
          <Route path='/Allbrands' element={<AllBrand />} />
          <Route path='/Products' element={<ShopProductsPage />} />
          <Route path='/Products/:id' element={<ProductDetailsPage />} />
          <Route path='/cart' element={<ProtectedClients Protect={CartPage} />} />
          <Route path='/order/paymethoud' element={<ProtectedClients Protect={PayMethodPage} />} />

          <Route path='/admin/allproducts' element={<ProtectedAdmin Prot={AdminAllProductsPage} />} />
          <Route path='/admin/allorders' element={<ProtectedAdmin Prot={AdminAllOrdersPage} />} />
          <Route path='/admin/order/:id' element={<ProtectedAdmin Prot={AdminOrderDetailsPage} />} />
          <Route path='/admin/addbrand' element={<ProtectedAdmin Prot={AdminAddBrandPage} />} />
          <Route path='/admin/addcategory' element={<ProtectedAdmin Prot={AdminAddCategoryPage} />} />
          {/* <Route path='/admin/addsubcategory' element={<Protected Prot={AdminAddSubCategoryPage} />} /> */}
          <Route path='/admin/AddProduct' element={<ProtectedAdmin Prot={AdminAddProductPage} />} />
          <Route path='/admin/UpdateProduct/:id' element={<ProtectedAdmin Prot={AdminUpdateProductPage} />} />

          <Route path='/user/profile' element={<ProtectedClients Protect={UserProfilePage} />} />
          <Route path='/user/allorders' element={<ProtectedClients Protect={UserAllOrdersPage} />} />
          <Route path='/user/favoriteproducts' element={<ProtectedClients Protect={UserFavoriteProductsPage} />} />
          <Route path='/user/help' element={<ProtectedClients Protect={UserHelpPage} />} />

        </Routes>
      </BrowserRouter>

      <Footer />
    </div>

  );
}

export default App;

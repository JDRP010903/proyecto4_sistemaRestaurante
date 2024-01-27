import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import HeaderComp from "../components/HeaderComp";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import SobreNosotrosPage from "../pages/SobreNosotrosPage";
import ReservacionesPage from "../pages/ReservacionesPage";
import RealizarPedidoPage from "../pages/RealizarPedidoPage";

const AppRouter = () => {
    return (
        <Router>
            <HeaderComp />
            <div className="container">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
                <Route path="/reservaciones" element={<ReservacionesPage />} />
                <Route path="/realizar-pedido" element={<RealizarPedidoPage />} />
            </Routes>
            </div>
        </Router>
    );
}

export default AppRouter

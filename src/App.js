import "./App.css";
import Header from "./component/Header/Header";

import Home from "./component/Home/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Checkout from "./component/Checkout/Checkout";
import LogIn from "./component/LogIn/LogIn";
import { useStateValue } from "./component/StateProvider/StateProvider";
import { useEffect } from "react";
import Payment from "./component/Payment/Payment";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./component/Orders/Orders";
import Footer from "./component/Footer/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const promise = loadStripe(
  "pk_test_51LJ7lzGcNCf73R2xJVFwndHp5bWoQhE66TPEKkCdRGnTmNAgvq1x9a0Mi1hMFRlawMm1XeyQsg7y2zlyae78ltVR00Japq5vkH"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/Orders "
            element={
              <>
                <Orders />
                <Header />
              </>
            }
          />
          <Route path="/LogIn" element={<LogIn />} />

          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />

          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <Header />

                <Home />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

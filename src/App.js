import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Review from "./components/Review/Review";
import Manage from "./components/Manage/Manage";
import Notfound from "./components/Notfound/Notfound";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Login from "./components/Login/Login";
import { createContext } from "react";
import { AuthContextProvider, PrivateRoute } from "./components/Login/useAuth";
import Ship from "./components/Ship/Ship";

function App(props) {
  const user = { name: "koduAzad", email: "koduazad@gmail.com" };
  return (
    <div>
      <AuthContextProvider>
        <Header> </Header>
        <Router>
          <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/manage">
              <Manage></Manage>
            </Route>

            {/* // Product detail is dynamic path  */}
            <Route path="/product/:productKey">
              <ProductDetail></ProductDetail>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/ship">
              <Ship></Ship>
            </PrivateRoute>

            {/* //Remind it bro * means page doesn't find anything that's why this Route set always down  */}
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;

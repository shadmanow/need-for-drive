import React from 'react';
import {Route, Switch} from "react-router-dom";

import {MainPage} from "./pages/MainPage/MainPage";
import {OrderPage} from "./pages/OrderPage/OrderPage";
import {AdminPage} from "./pages/AdminPage/AdminPage";

function App() {
  return (
    <Switch>
      <Route exact path='/' component={MainPage}/>
      <Route exact path='/order' component={OrderPage}/>
      <Route exact path='/admin' component={AdminPage}/>
    </Switch>
  );
}

export default App;
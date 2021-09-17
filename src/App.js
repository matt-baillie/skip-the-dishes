import { BrowserRouter, Switch, Route } from "react-router-dom"
import Homepage from "./components/Homepage/Homepage"
import GroceriesMain from "./components/GroceriesMain/GroceriesMain"
import GroceryStoreSingle from "./components/GroceryStoreSingle/GroceryStoreSingle"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/groceries" component={GroceriesMain} />
        <Route path="/groceries/stores/:storeId" component={GroceryStoreSingle} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

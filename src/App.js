import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/home";
import ListCart from "./component/ListCart";
import Menu from "./component/Menu";
import Form from "./component/form";
import Followers from "./component/followers";


function App() {
  return (
    < >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/listCart" element={<ListCart />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/form" element={<Form/>} />
          <Route path="/followers" element={<Followers />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

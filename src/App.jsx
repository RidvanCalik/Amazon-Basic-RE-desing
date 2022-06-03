import { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Header from "./components/Header"
import Main from "./pages/Main.jsx"

import "./styles/index.css";
function App() {
    const [basket, setBasket] = useState([]);

    return (
        <>
            <Header data={basket}></Header>

            <div id="main">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Main />}>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>


    );
}
export default App;
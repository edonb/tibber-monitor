import './App.css';
import GetUsers from "./TibberApiComponents/getusers/GetUsers";
import Subscribe from "./TibberApiComponents/subscription/Subscribe";
import Header from "./components/header/Header";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Prices from "./Prices";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header>
                    <Routes>
                        <Route path="/" element={<GetUsers/>} />
                        <Route path="/Usage" element={<Subscribe/>} />
                        <Route path="/Prices" element={<Prices/>} />

                    </Routes>
                </Header>
            </BrowserRouter>
        </div>
    );
}

export default App;

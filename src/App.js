import './App.css';
import Subscribe from "./TibberApiComponents/subscription/Subscribe";
import Header from "./components/header/Header";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Prices from "./Prices";
import Gauge from "./components/gauge/Gauge";
import Home from "./pages/home/Home";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/Usage" element={<Subscribe/>} />
                        <Route path="/Prices" element={<Prices/>} />
                        <Route path="/Gauge" element={<Gauge/>} />
                    </Routes>
                </Header>
            </BrowserRouter>
        </div>
    );
}

export default App;

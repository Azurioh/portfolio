import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import CV from "./Views/CV";
import NotFound from "./Views/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cv" element={<CV />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
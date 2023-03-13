import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./Main";
import Element from "./Element";

function App() {
    return (
        <div className="App">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path={"/element"} element={<Element/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

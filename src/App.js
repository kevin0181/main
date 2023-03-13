import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./Main";
import Start from "./Start";

function App() {
    return (
        <div className="App">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    {/*<Route path={"/"} element={<Start/>}/>*/}
                    <Route path="/" element={<Main/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

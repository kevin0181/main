import {useNavigate} from "react-router-dom";

let Start = () => {
    let navigate = useNavigate();
    return (
        <div>Start
            <div>
                <button onClick={() => {
                    navigate("/main");
                }}>메인가자
                </button>
            </div>
        </div>
    );
}
export default Start;
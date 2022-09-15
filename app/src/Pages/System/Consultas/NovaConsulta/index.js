import "./index.scss"
import "../../../Common/common.scss"

export default function Index() {
    
     function hideNova(){
        var element = document.getElementById("pop-up")
        element.classList.remove("show-main")

    }

    return(
        <div className="nova-content">
                
                    <h1>pintooo</h1>
                    <button onClick={hideNova}> pintoo </button>
               
        </div>
    )
}
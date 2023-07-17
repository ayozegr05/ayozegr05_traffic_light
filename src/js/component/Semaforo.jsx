import React, {useState} from "react";

const Semaforo = () =>{
const [color, setColor] = useState("green");
const [extraColor, setExtraColor] = useState(false);

const toggleColor = () => {
    if (color === "red") {
      setColor("yellow");
    } else if (color === "yellow") {
      setColor("green");
    } else if (color === "green" && extraColor === true) {
      setColor("purple");
    } else if (color === "green" && extraColor === false){
      setColor("red")
    } else if (color === "purple") {
      setColor("red");
    }
  };


  const addPurpleColor = () => {
    setExtraColor(!extraColor);
  };

return (
    <div className="rodarlosbotones">
        <div className="generalcontainer">
            <div className="traffic-light-stick"></div>

        
            <div className="traffic-light">
                <div onClick={()=>setColor("red")} className={"light red mb-5" + (color === "red" ? " glow" : "")}></div>
                <div onClick={()=>setColor("yellow")} className={"light yellow mb-5" + (color === "yellow" ? " glow" : "")}></div>
                <div onClick={()=>setColor("green")} className={"light green" + (color === "green" ? " glow" : "")}></div>
                {extraColor && (<div onClick={() => setColor("purple")} className={"light purple mt-5" + (color === "purple" ? " glow" : "")}></div>)}
            </div>
            
            
        </div>
        <div className="buttonContainer">
            <button onClick={toggleColor}>Cambiar color</button>
            <button onClick={addPurpleColor}>Añadir color púrpura</button>
        </div>
    </div>
);
};
export default Semaforo
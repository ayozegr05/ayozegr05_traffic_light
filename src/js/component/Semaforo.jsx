import React, {useState} from "react";

const Semaforo = () =>{
const [selectedColor, setSelectedColor] = useState("green");
const [extraColor, setExtraColor] = useState(false);

const toggleColor = () => {
    if (selectedColor === "red") {
      setSelectedColor("yellow");
    } else if (selectedColor === "yellow") {
      setSelectedColor("green");
    } else if (selectedColor === "green" && extraColor === true) {
      setSelectedColor("purple");
    } else if (selectedColor === "green" && extraColor === false){
      setSelectedColor("red")
    } else if (selectedColor === "purple") {
      setSelectedColor("red");
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
                <div onClick={()=>setSelectedColor("red")} className={"light red mb-5" + (selectedColor === "red" ? " glow" : "")}></div>
                <div onClick={()=>setSelectedColor("yellow")} className={"light yellow mb-5" + (selectedColor === "yellow" ? " glow" : "")}></div>
                <div onClick={()=>setSelectedColor("green")} className={"light green" + (selectedColor === "green" ? " glow" : "")}></div>
                {extraColor && (<div onClick={() => setSelectedColor("purple")} className={"light purple mt-5" + (selectedColor === "purple" ? " glow" : "")}></div>)}
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
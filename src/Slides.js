import { useState } from "react";
import { dataTwo } from "./dataTwo";

function Slides() {

    const [decor, setDecor] = useState(0);
    const{id, name, image} = dataTwo[decor];

    const nextDecor = () => {
        setDecor((decor =>{
            decor ++;
            if(decor > dataTwo.length-1){
                decor=0
            }
            return decor;
        }))
    }

    const backDecor = () => {
        setDecor((decor =>{
            decor--;
            if(decor < 0){
                return dataTwo.length-1;
            }
            return decor;
        }))
    }

    return(
        <div>
            <div>
                <h2 className="header">Фото наших товаров в интерьере</h2>
            </div>

            <div className="container">
                <img className="foto-decor" src={image} width='800px' alt={name}/>
            </div>

            <div className="btn-container">
                <button className="btn" onClick={backDecor}>НАЗАД</button>
                <button className="btn" onClick={nextDecor}>ДАЛЕЕ</button>
            </div>

        </div>
    )
}

export default Slides;
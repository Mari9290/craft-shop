import { useState } from "react";
import {data} from "./data";
import Product from "./Product";
import Button from "./Button";

function Catalog () {

    const [product, setProduct] = useState(data);

    const chosenProduct = (attribute) => {
        const newProduct = data.filter(element => 
            element.attribute === attribute);
            setProduct(newProduct);
    }

    return(
        <div className="container-catalog">
            <Button filteredProduct = {chosenProduct}/>
            <Product card={product}/>
        </div>
    )
}

export default Catalog;
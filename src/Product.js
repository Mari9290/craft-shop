function Product({card}) {
    return(
        <div className="container">
            {card.map((element=>{
                const{id, name, attribute, price, image} = element;
                return <div key={id} className='container-card'>
                    <img className="foto" src={image} alt={name}/>
                    <div>
                    <p className="par">{name}</p>
                    <p className="par">{price}</p>
                    </div>
                </div>
            }))}
        </div>
    )
}

export default Product;
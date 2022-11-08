function Button({filteredProduct}) {
    return(
        <div className="container-chosen">
        <button onClick={() => filteredProduct('PhotoFrame')} className="btn-catalog">Рамки</button>
        <button onClick={() => filteredProduct('candles')}  className="btn-catalog">Свечи</button>
        <button onClick={() => filteredProduct('vase')}  className="btn-catalog">Вазы</button>
        <button onClick={() => filteredProduct('tableware')}  className="btn-catalog">Посуда</button>
        </div>
    )
}

export default Button;
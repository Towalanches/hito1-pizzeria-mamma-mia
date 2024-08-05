const CardPizza = ({ name, price, ingredients, img }) => (
    <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    <strong>Ingredientes:</strong> {ingredients.join(', ')}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="text-muted">Precio: ${price.toLocaleString()} CLP</p>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Ver más 🍕</button>
                    <button type="button" className="btn btn-sm btn-outline-primary">Añadir 🛒</button>
                </div>
            </div>
        </div>
    </div>
)

export default CardPizza

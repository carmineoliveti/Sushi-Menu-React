
function Card(props) {
    return (
        <div className="col">
            <div className="card" style={{width: '18rm', textAlign: 'center'}}>
            <button onClick={() => props.onIncrement(props.card)} className='btn btn-outline-primary'>Aggiungi <span className="badge badge-light">{props.card.quantità}</span></button>
                <img className="card-img-top" src={props.card.immagine} alt="sushi immagine" />
                    <div className="card-body">
                        <h5 className="card-title">{props.card.nome} Roll</h5>
                        <p className="card-text">{props.card.prezzo} euro</p>
                        <button onClick={() => props.onDelete(props.card.id)} className='btn btn-outline-danger'>Elimina</button>
                    </div>
            </div>
        </div>
    );
}

export default Card;
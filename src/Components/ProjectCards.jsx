function Cards (props) {
    return (
        <div>
            <a  href={props.myLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="card" 
                style={{backgroundImage: `url(${props.image})`}}>
                    <span className="material-symbols-outlined" style={{textAlign: 'center', color: 'black'}}>
                        swipe_left
                        </span>
                    <h1 className="cardName">{props.name}</h1>
                </a>
        </div>
    )
}

export default Cards
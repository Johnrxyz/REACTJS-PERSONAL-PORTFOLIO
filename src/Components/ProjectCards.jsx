function Cards (props) {
    const GoToLink = () => {
        window.open(props.myLink, "_blank", "noopener,noreferrer");
    }
    
    return (
        <div>
            <div
                onClick={GoToLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="card" 
                style={{backgroundImage: `url(${props.image})`}}>
                    <span className="material-symbols-outlined" style={{textAlign: 'center', color: 'black'}}>
                        swipe_left
                        </span>
                    <h1 className="cardName">{props.name}</h1>
                </div>
        </div>
    )
}

export default Cards
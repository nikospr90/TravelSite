import location from '/icons/location.svg'


function Card(props){
    let width = 400;
    let height = 300
    return (
        <div className="card">
            <img className="card--image" src={props.image} alt='picture' width={width} height={height} />
            
            <div className="card--info">
                <div className='card--location'>
                    <img className="card--location--icon"src={location} alt='location' width={30} height={30} />
                    <span className='country'>{props.country}</span>
                </div>

                <span className='title'>{props.title}</span>
                <span className='date'>{props.date}</span>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card;
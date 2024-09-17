import Card from '../Card.jsx';
import data from '../../Data.jsx'

function MainContent (){
    const cards = data.map((card) => {
        return (
            <Card 
                key={card.id}
                country={card.country}
                image={`/images/${card.image}`}
                title={card.title}
                date={card.date}
                description={card.description}
            />
        )})
    return (<div className="main">{cards}</div>)
}

export default MainContent;
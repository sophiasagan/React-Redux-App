import React from 'react';
import { Card } from 'semantic-ui-react';

const WineCard = (props) => {
    // const wines = data.pairedWines;
    console.log("WineCard Props: ", props.item)
    return(
    // <li>{wines}</li>

    // `Pairs well with: ${data.pairedWines[0]} or ${data.pairedWines[1]}${data.pairingText}`

        <>
    <Card className="wine_card">
        <Card.Content>
            <Card.Header className="wine_name" >
                <h2>Pairs well with: {props.item}</h2>
            </Card.Header>
            {/* <Card.Meta className="wine_name">
                <h4>Wine Type: {props.data.pairedWines}
                </h4>
            </Card.Meta> */}
            <Card.Description className="pairingText">{props.item.pairingText}
            </Card.Description> 
            {/* <Card.Description className="productMatches">
            Matches: {data.productMatches.id} */}
            {/* const wineItems = props.wine.map((item) => {
        return <WineCard key={item.id} item={item} /> */}
        {/* {items.map((item, index) => {
   return <div key={index}>
--note the name property is primitive--->{item.name}</div>;
  })} */}
            {/* </Card.Description> */}
        </Card.Content>
    </Card>
        </>
    )
};

export default WineCard


import React, { useEffect } from 'react';
// import './WineList.css';
import { connect } from 'react-redux';
import { Grid, Image } from 'semantic-ui-react';


import  WineCard from './WineCard'
import { searchWines } from '../actions'

const WineList = (props) => {
    const wineItems = props.wine && props.wine.map ((item, index) =>
    // props.results.map((item) => {
        <WineCard key={index} item={item} />
    );
    console.log("WineList props: ", props);
    return (
        <div>
            <h1> WineList </h1>
            <ul>
                {wineItems}
            </ul>



        </div>

    )
    }

const mapStateToProps = state => {
    return {
        wine: state.wine,
        isFetching: state.isFetching,
        error: state.error
    }
}

const mapDispatchToProps = { searchWines };

export default connect(mapStateToProps, mapDispatchToProps)(WineList);
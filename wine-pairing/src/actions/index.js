import axios from 'axios';

export const FETCH_WINES_SUCCESS = 'FETCH_WINES_SUCCESS';

export const FETCH_WINES_REQUEST = 'FETCH_WINES_REQUEST';

export const FETCH_WINES_ERROR = 'FETCH_WINES_ERROR';




export const searchWines = (item) => dispatch => {
    dispatch({ type: FETCH_WINES_REQUEST })
    
    axios
        .get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/pairing?maxPrice=1000&food=${item}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "d954cbe05cmsh3a6de0dc9e1850fp18031cjsnbac060dcb7e6"
            }
        })    
        .then(res => {

            dispatch({ type: FETCH_WINES_SUCCESS, payload: res.data.pairedWines})
        })
        

        .catch(err => {
            dispatch({ type: FETCH_WINES_ERROR, payload: err.response})
        })


};

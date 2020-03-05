import { FETCH_WINES_REQUEST, FETCH_WINES_SUCCESS, FETCH_WINES_ERROR } from '../actions';

export const initialState = {
    wine:[
        // {"pairedWines":["merlot","cabernet sauvignon","pinot noir"],
        // "pairingText":"Merlot, Cabernet Sauvignon, and Pinot Noir are my top picks for Steak. After all, beef and red wine are a classic combination. Generally, leaner steaks go well with light or medium-bodied reds, such as pinot noir or merlot, while fattier steaks can handle a bold red, such as cabernet sauvingnon. The Franciscan Estate Merlot with a 4.3 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.",
        // "productMatches":[{"id":443286,
        // "title":"Franciscan Estate Merlot",
        // "description":"Our Oakville estate produces distinctive, supple Merlot characterized by flavors of cherries and plums. This wine shows rich, lush and velvety fruit flavors of cherries, plums and blackberries that merge with light toasted oak. Blended with a samll percentage of Cabernet Sauvignon and Cabernet Franc this wine is well balanced and structured with a lingering finish.Alcohol: 13.5%",
        // "price":"$25.49",
        // "imageUrl":"https://spoonacular.com/productImages/443286-312x231.jpg",
        // "averageRating":0.86,
        // "ratingCount":5.0,
        // "score":0.7975,
        // "link":"https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Ffranciscan-estate-merlot-1998%2F7308"}]}
    ],
    isFetching: false,
    error: '',
    

};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WINES_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: ''
            };


        case FETCH_WINES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                wine: [...action.payload],
                error: ''
            };




        case FETCH_WINES_ERROR:
            return {
                ...state,
                isFetching: true,
                error: action.payload
            }

        default:
            return state;


    }

};


import React from 'react';
import { Header } from 'semantic-ui-react';
import {WineSearch} from '../components/WineSearch';
import {connect} from "react-redux";
import { searchWines } from "../actions"

const Heading = ({wine, searchWines, isFetching})=> {
  console.log("App Props:", wine);

  const newWineSearch = item => {
    
    searchWines(item);
  }
  return (
    <div className="heading">
      <Header className="App-header">
        <div className="welcome">
          
          
          <h4>Welcome to the Wine Bar</h4>

          <WineSearch fetch={isFetching} find={newWineSearch}/>
          <p>Find a wine that goes well with a food. Food can be a dish name ("steak"), an ingredient name ("salmon"), or a cuisine ("italian").</p>

        </div>
      </Header>
      </div>

      )
}

const mapToStateProps = state => {
      return {
        wine:state.wine,
        isFetching: state.isFetching,
        error: state.error
      }
    }
    
    export default connect(mapToStateProps,{ searchWines })(Heading);
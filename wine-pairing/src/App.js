import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
// import Dashboard from './components/Dashboard'
import { searchWines } from './actions';
import WinesList from './components/WinesList';
import {WineSearch} from './components/WineSearch';
import { render } from 'react-dom';
import Heading from './components/Heading';



function App() {
  
  return (
    <div className="App">
      <div className='main-body'>
        <Heading />
        <WinesList />
      </div>
      
    </div>
  );
}

export default App;

// function App({wine, searchWines, isFetching}) {
//   console.log("App Props:", wine);

//   const newWineSearch = item => {
    
//     searchWines(item);
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="welcome">
          
          
//           <h4>Welcome to the Wine Bar</h4>

//           <WineSearch fetch={isFetching} find={newWineSearch}/>
//           <p>Find a wine that goes well with a food. Food can be a dish name ("steak"), an ingredient name ("salmon"), or a cuisine ("italian").</p>

//         </div>
//       </header>

//       <body className="App-body">
//         <WineList wine={wine} />
//       </body>
//     </div>
//   );
// }

// const mapToStateProps = state => {
//   return {
//     wine:state.wine,
//     isFetching: state.isFetching,
//     error: state.error
//   }
// }

// export default connect(mapToStateProps,{ searchWines })(App);
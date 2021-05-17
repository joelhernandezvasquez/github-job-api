import React from 'react';

import{BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './Home';
import DetailPage from './DetailPage';
import Header from './Header';
import "../sass/main.scss";

const App = () => {
    return (
        
        <Router>
          <div className="wrapper">
             <Header/>

           <Switch>
              <Route exact path ="/">
                 <Home/>
              </Route>

              <Route path='/detail'  
              render={(props)=>(
                <DetailPage{...props}  />
              )}/>
           
           </Switch>
        </div>

        </Router>
        
    )
}

export default App;

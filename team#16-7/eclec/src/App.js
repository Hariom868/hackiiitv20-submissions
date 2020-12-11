import React from "react"
import Home from "./components/home"
import {BrowserRouter,Route,Switch} from 'react-router-dom'
// import Login from "./components/Sign-in/"
import Login from "./components/Sign-in/sign-in"
import Registration from "./components/Registration/Registration"
function App() {
  return (
    <div className="App">
     <BrowserRouter>
            <div>
               <Switch>
                   <Route exact path='/' component={Home} />
                  <Route path='/login' component={Login} />    
                   <Route path='/Sign_up' component={Registration} /> 
               </Switch>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;

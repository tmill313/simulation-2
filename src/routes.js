import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Step5 from './Components/Step5';
import Step4 from './Components/Step4';
import Step3 from './Components/Step3';
import Step2 from './Components/Step2';
import Step1 from './Components/Step1';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

export default(

<Switch>
    <Route exact path='/' component={Login}/>
    <Route exact path='/Dashboard' component={Dashboard}/>
    <Route exact path='/Step1' component={Step1}/>
    <Route exact path='/Step2' component={Step2}/>
    <Route exact path='/Step3' component={Step3}/>
    <Route exact path='/Step4' component={Step4}/>
    <Route exact path='/Step5' component={Step5}/>
   



</Switch>



)
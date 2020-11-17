import React from 'react';
import { Switch,Route} from "react-router-dom";
import FSR from './stats/FSRContainer';
import Escalation from './stats/EscalationContainer';
import ResolutionTime from './stats/ResolutionTimeContainer';

export default function MainContainer (){
    
    return(
            <Switch>
                <Route exact path="/">
                    <p>Esta es una demo...</p>
                </Route>
                <Route path="/autoresolution" component={FSR} />
                <Route path="/escalation" component={Escalation}/>
                <Route path="/resolutiontime" component={ResolutionTime} />
            </Switch>
    );
    
}


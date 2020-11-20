import React from 'react';
import { Switch,Route} from "react-router-dom";
import FSR from './stats/FSRContainer';
import Escalation from './stats/EscalationContainer';
import ResolutionTime from './stats/ResolutionTimeContainer';
import TMO from './stats/TMOContainer';
import Resume from './stats/ResumeContainer';
export default function MainContainer (){
    
    return(
            <Switch>
                <Route exact path="/"  component={Resume}/>
                <Route path="/escalation" component={Escalation}/>
                <Route path="/tmo" component={TMO} />
                <Route path="/autoresolution" component={FSR} />
                <Route path="/resolutiontime" component={ResolutionTime} />
            </Switch>
    );
    
}


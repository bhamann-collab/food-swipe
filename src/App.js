import React from 'react';
import PageTitle from './component/PageTitle'
import PageSwipe from './component/PageSwipe'
import PageResults from './component/PageResults'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './css/App.scss';


function App() {

    return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" exact component={PageTitle} />
					<Route path="/pageSwipe" component={PageSwipe} />
					<Route path="/pageResults" component={PageResults} />
					<Route path="/privacyPolicy" component={() => window.location = 'https://policies.google.com/privacy?hl=en-US'}/>
					<Route path="/termsOfService" component={() => window.location = 'https://policies.google.com/terms?hl=en-US'}/>
				</Switch>
			</div>
		</Router>
    );
}

export default App;

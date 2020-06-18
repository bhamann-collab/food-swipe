import React from 'react';
import PageTitle from './component/PageTitle'
import PageSwipe from './component/PageSwipe'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './css/App.scss';


function App() {

    return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" exact component={PageTitle} />
					<Route path="/pageSwipe" component={PageSwipe} />
				</Switch>
			</div>
		</Router>
    );
}

export default App;

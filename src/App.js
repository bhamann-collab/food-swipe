import React from 'react';
import PageSwipe from './component/PageSwipe'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './css/App.scss';


function App() {

    return (
		<div className="App">
			<PageSwipe />
		</div>
    );
}

export default App;

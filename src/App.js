import React, { useEffect } from 'react';
import PageTitle from './component/PageTitle'
import PageSwipe from './component/PageSwipe'
import PageResults from './component/PageResults'
import Rooms from './component/Rooms/Rooms'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import socketIOClient from "socket.io-client"
import './css/App.scss';

const ENDPOINT = `http://localhost:5000`

//useContext() with socket.io
export const SocketContext = React.createContext()
export const socket = socketIOClient(ENDPOINT);

function App() {
	

	useEffect(() => {
		socket.on("test", data => {
			console.log(data)
		})
	}, [])

    return (
		<Router>
			<SocketContext.Provider
				value={socket}
			>
			<div className="App">
				<Switch>
					<Route path="/" exact component={PageTitle} />
					<Route path="/rooms" component={Rooms} />
					<Route path="/pageSwipe" component={PageSwipe} />
					<Route path="/pageResults" component={PageResults} />
					<Route path="/privacyPolicy" component={() => window.location = 'https://policies.google.com/privacy?hl=en-US'}/>
					<Route path="/termsOfService" component={() => window.location = 'https://policies.google.com/terms?hl=en-US'}/>
				</Switch>
			</div>
			</SocketContext.Provider>
		</Router>
    );
}

export default App;

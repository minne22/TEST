import React from "react";
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";

function App() {
return (
	<Router>
		<Routes>
			<Route exact path="/second"
				component={SecondComponent}>
			</Route>
			<Route exact path="/first"
				component={FirstComponent}>
			</Route>
		
			<ul>
			<br />
			<li>
				<Link to="/first" target="_blank">
				<h1>Open First Component</h1>
				</Link>
			</li>
			<br />
			<li>
				<Link to="/second" target="_blank">
				<h1>Open Second Component</h1>
				</Link>
			</li>
			</ul>
		</Routes>
	</Router>
);
}
export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

// // Importing newly created components
// import SecondComponent from "./components/SecondComponent";
// import FirstComponent from "./components/FirstComponent";

// function Home() {
// 	<ul>
// 		<Link to="/first" target="_blank">
// 		<h1>Open First Component</h1>
// 		</Link>

// 		<Link to="/second" target="_blank">
// 		<h1>Open Second Component</h1>
// 		</Link>
// 	</ul>
// }

// function App() {
// 	<Home/>

// 	return (
// 		<Router>
// 			<Routes>
// 				<Route exact path="/first" component={FirstComponent}/>
// 				<Route exact path="/second" component={SecondComponent}/>
// 			</Routes>
// 		</Router>
// 	)
// }
// export default App;


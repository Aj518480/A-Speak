import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	withRouter
} from 'react-router-dom';
import Auth from "./utils/Auth";
// import Nav from "./components/Nav";
import Navbar from "./components/NavPage"
// import Login from "./components/Login";
import Register from "./components/Register";
import { Container } from "./components/Grid";
import PublicRoute from "./pages/PublicRoute";
import ProtectedRoute from "./pages/PublicRoute";
// import Footer from "./components/Footer";
// import Button from "./components/Buttons";

// import Jumbotron from "./components/Jumbotron"
import './App.css';

import LoginPage from "./pages/LoginPage";
import Landing from "./pages/Landing";
import Login from './components/Login';
import NewUserForm from "./pages/NewUserForm";
import Go from "./pages/Go"
import Eat from "./pages/Eat"
import Play from "./pages/Play"
import Uploader from "./pages/Uploader"



//I want to add some basic inline styling here, even though we are bringing in styles
// const listStyle = {
// 	color: 'cornflowerblue',
// 	listStyle: 'none'
// };
//Now we have all the stuff we need .. let's render some components with the Router
const AuthExample = () => (
	<Router>

		<div className="background">


			<Navbar />

			
				
			
				{/* <ul style={listStyle}>
					<li><Link to="/public">Public Page</Link></li>
					<li><Link to="/protected">Protected Page</Link></li>
					<li><Link to="/register">Register a New User</Link></li>
				</ul> */}

				{/* <Jumbotron>
				</Jumbotron>
				<ul style={listStyle}>
					<li><Link to="/login"><Button>Log In</Button></Link></li>
					<li><Link to="/protected">Protected Page</Link></li>
					<li><Link to="/register"><Button>Sign Up</Button>
					</Link></li>
				</ul> */}
				{/* <Button>Log In</Button>
				<Button>Sign Up</Button> */}
				{/* <AuthButton /> */}
				<Switch>

					
					<Route exact path="/" component={Landing} />
					{/* <Route path="/public" component={PublicRoute} /> */}
					{/* <Route exact path="/loginpage" component={LoginPage}/> */}
					<Route exact path="/login" component={Login}/>
					<Route exact path="/register" component={Register} />
					<PrivateRoute exact path="/protected" component={ProtectedRoute} />
					<PrivateRoute exact path="/new_user" component={NewUserForm} />
					<PrivateRoute exact path="/go" component={Go} />
					<PrivateRoute exact path="/eat" component={Eat} />
					<PrivateRoute exact path="/play" component={Play} />
					<PrivateRoute exact path="/uploader" component={Uploader} />
					
					{/* <PrivateRoute exact path="/protected" component={ProtectedRoute} /> */}
					
				</Switch>
				


				
			{/* <PlainFooter/> */}


		</div>

	</Router>
)



//Authbutton component / withRouter is imported from react-router 
const AuthButton = withRouter(({ history }) => (
	Auth.isAuthenticated ? (
		<div className="container">
			<p>Success! You are Logged In!</p>
			<button className="btn btn-danger"
				onClick={() => {
					Auth.signout(() => history.push('/'))
				}}>
				Sign out
			</button>
		</div>
	) : (
			<p>You are not logged in.</p>
		)
))

// This is the private route component this checks for an authorized user here
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		Auth.isAuthenticated ? (
			<Component {...props} />
		) : (
				<Redirect to={{
					pathname: '/login',
					state: { from: props.location }
				}} />
			)
	)} />
)








export default AuthExample


import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import { Router, Route, Link, IndexRoute, Redirect, hashHistory } from 'react-router'
import About from './components/About'
import Inbox from './components/Inbox'
import Message from './components/Message'

var enterHandler = function() {
	console.log('onenter');
}
var leaveHandle = function() {
	console.log('onleave')
}

function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return (module) => cb(null, module.default);
}


// const routes = {
// 	component: App,
//     path: '/',
//     childRoutes: [
// 	    {
// 	        path: '/',
// 	        getComponent(location, cb) {
// 		        System.import('./components/App')
// 		          .then(loadRoute(cb))
// 		          .catch(errorLoading);
// 	        }
// 	    },
// 	    {
// 	      	path: 'about',
// 	      	getComponent(location, cb) {
// 		        System.import('./components/About')
// 		          .then(loadRoute(cb))
// 		          .catch(errorLoading);
// 		    }
// 	    },
// 	    {
// 	      	path: 'inbox',
// 	      	getComponent(location, cb) {
// 		        System.import('./components/Inbox')
// 		          .then(loadRoute(cb))
// 		          .catch(errorLoading);
// 	      	}
// 	    },
//     ]
// }

// const routes = {
// 	path: '/',

// 	getChildRoutes(partialNextState, callback) {
// 		require.ensure(['./components/About', './components/Inbox'], function(require) {
// 			callback(null, [
// 				{
// 					path: 'about',
// 					component: About
// 				},
// 				{
// 					path: 'inbox',
// 					component: Inbox
// 				}
// 			])
// 		})

// 	},

// 	getIndexRoute(partialNextState, callback) {
//     	require.ensure(['./components/About'], function (require) {
//       		callback(null, {
//         		component: About,
//         	})
//     	})
//     },

//     getComponents(nextState, callback) {
//     	require.ensure(['./components/App'], function (require) {
//             callback(null, App)
//     	})
//   	}
// }


/**
    <Route path="/" component={App}>
		<IndexRoute component={About} />
	    <Route path="about" component={About} />
	    <Route path="inbox" component={Inbox} onEnter={enterHandler} onLeave={leaveHandle}>
	    	<Route path="/messages" component={Message}/>
	    	<Redirect from="messages" to="/messages" />
	    </Route>
	    <InboxRoute />
	</Route>
 */

ReactDom.render(
    (
        <Router history={hashHistory}>
        	<Route path="/" component={App}>
				<IndexRoute component={About} />
			    <Route path="about" component={About} />
			    <Route path="inbox" component={Inbox} onEnter={enterHandler} onLeave={leaveHandle}>
			    	<Route path="/messages" component={Message}/>
			    	<Redirect from="messages" to="/messages" />
			    </Route>
			</Route>
        </Router>
    ),
    document.getElementById('app')
)
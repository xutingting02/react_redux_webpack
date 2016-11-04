import React, { Component } from 'react'
import { Router, Route, Link, IndexLink } from 'react-router'

export default class App extends Component {
    render() {
        return (
        	<div>
        		<h1>my first app</h1>
        		<ul>
        			<li><IndexLink to="/">Home</IndexLink></li>
	        		<li><Link to="/about">About</Link></li>
	        		<li><Link to="/inbox">Inbox</Link></li>
        		</ul>
        		{this.props.children}
        	</div>
        )
     }
}
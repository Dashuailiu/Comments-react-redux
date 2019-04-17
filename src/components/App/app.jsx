import React, { Component } from 'react';
import {connect} from 'react-redux';

import CommentAdd from '../../components/comment-add/comment-add';
import CommentList from '../../components/comment-list/comment-list';

class App extends Component {
	render() {
		return (
			<div>
				<header className="site-header jumbotron">
					<div className="container">
						<div className="row">
							<div className="col-xs-12">
								<h1>React Comments</h1>
							</div>
						</div>
					</div>
				</header>
				<div className="container">
					<CommentAdd />
					<CommentList />
				</div>
			</div>
		);
	}
}

export default connect(
	null
)(App)
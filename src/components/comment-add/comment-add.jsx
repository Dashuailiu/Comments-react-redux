import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addComment } from '../../redux/actions'

class commentAdd extends Component {
	static propTypes = {
		addComment: PropTypes.func.isRequired
	}

	state = {
		username: '',
		content: ''
	}

	addComment = () => {
		// get the input value by refs
		const username = this.username.value;
		const content = this.content.value;

		//recall the addcomment function to update the state
		this.props.addComment({ username, content })

		this.username.value = '';
		this.content.value = '';
	}

	render() {
		return (
			<div className="col-md-4">
				<form className="form-horizontal">
					<div className="form-group">
						<label>Username:</label>
						<input type="text" className="form-control" placeholder="Username"
							ref={input => this.username = input} />
					</div>
					<div className="form-group">
						<label>Comment content:</label>
						<textarea className="form-control" rows="6" placeholder="Content"
							ref={input => this.content = input}></textarea>
					</div>
					<div className="form-group">
						<div className="col-sm-offset-2 col-sm-10">
							<button type="button" className="btn btn-default pull-right"
								onClick={this.addComment}>submit</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default connect(
	null,
	{ addComment }
)(commentAdd)

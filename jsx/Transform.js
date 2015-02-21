var Transform = React.createClass({

	getInitialState: function(){
		return{
			welcome: '<div />'
			output:'',
			err: ''
		}
	},

	update: function(ev){
		var code = ev.target.value;

		try{
			this.setState({
				output:JSXTransformer.transform(code).code,
				err: ''
			})
		}
		catch(err){
			this.setState({
				err:err.message
			})
		}

	},

	render: function() {
		return (
			<div>
				<div className="error">
					{this.state.err}
				</div>

				<div className="output">
					<textarea defaultValue={this.state.input} onChange={this.update} />
					<pre>{this.state.output}</pre>
				</div>
			</div>
		);
	}

});
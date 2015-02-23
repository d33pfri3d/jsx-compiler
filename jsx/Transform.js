var Transform = React.createClass({

	getInitialState: function(){
		return{
			input: '<div className="guardian" onClick={who}>Starlord!</div>',
			output:'',
			err: ''
		}
	},

	componentDidMount: function(){
		this.setState({
			output:JSXTransformer.transform(this.state.input).code
		})
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
					<div className="section left-section">
						<h3>JSX Template</h3>
						<textarea defaultValue={this.state.input} onChange={this.update} />
					</div>

					<div className="section right-section">
						<h3>JavaScript</h3>
						<pre>{this.state.output}</pre>
					</div>
				</div>
			</div>
		);
	}

});
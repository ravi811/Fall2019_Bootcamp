import React from 'react';

class Search extends React.Component {

	state = {
		name: ''
	}

	filterUpdate() {
		//Here you will need to update the value of the filter with the value from the textbox
		const val = this.refValue.value
		//console.log(val)
		this.props.filterUpdate(val)
	}
	
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value

		//console.log('filterText value', this.props.filterText)
		
		return (
			<form>
				<input 
					type="text"
					ref={ (value) => {this.refValue = value} }
					placeholder="Search"
					onChange={this.filterUpdate.bind(this)}
				/>
				
			</form>
		);
	}
}
export default Search;

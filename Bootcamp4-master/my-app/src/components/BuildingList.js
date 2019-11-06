import React from 'react';
import RemoveBuilding from './RemoveBuilding';

class BuilingList extends React.Component {

	render() {
		
		const {data, filterText, selectedUpdate } = this.props;

		const buildingList = data
			.filter(name => {
				return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			})
			.map(directory => {
				return (
					<tr key={directory.id}>
						<td>{directory.code} </td>
						<td onClick={() => selectedUpdate(directory.id)}> 
							{directory.name}
						</td>
						<RemoveBuilding key={directory.id} directory={directory} delBuilding={this.props.delBuilding}/>
					</tr>
				);
		});
		
		return (
			<div>
			{buildingList}
			</div>
		);
	}
}
export default BuilingList;

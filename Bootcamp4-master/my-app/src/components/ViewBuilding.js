import React from 'react';
import BuildingInfo from './BuildingInfo';


class ViewBuilding extends React.Component {
	render() {

		const { data, selectedBuilding } = this.props;


		const buildingInfo = data
			.filter(directory => directory.id === selectedBuilding)
			.map(directory => {
				
				if(!directory.coordinates) {
					return (
						<BuildingInfo directory={directory} />
					)
				}
				
				return(
					<div>
						<BuildingInfo directory={directory} />
					</div>
				)
				
			})

		return (
			<div>
				<p style={{backgroundColor: '#ff0000'}}>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
				<p>
					{buildingInfo}
				</p>
			</div>
		);
	}
}
export default ViewBuilding;

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
						// <div>
						// 	<p>Code: {directory.code}</p>
						// 	<p>Name: {directory.name}</p>
						// 	<p>Coordinates not defined</p>
						// 	<p>Address: {directory.address}</p>
						// </div>
					)
				}
				
				return(
					<div>
						<BuildingInfo directory={directory} />
						{/* <p>Code: {directory.code}</p>
						<p>Name: {directory.name}</p>
						<p>Latitude: {directory.coordinates.latitude}</p>
						<p>Longitude: {directory.coordinates.longitude}</p>
						<p>Address: {directory.address}</p> */}
					</div>
				)
				
			})

		return (
			<div>
				<p style={{backgroundColor: '#ffffff'}}>
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

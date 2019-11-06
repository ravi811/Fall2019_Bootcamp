import React from 'react'
import {
    Card, CardBody,
    CardTitle
  } from 'reactstrap';



class BuildingInfo extends React.Component {
    render() {
        const { directory } = this.props;
        if(!directory.coordinates || !directory.address) {
            if(directory.address && !directory.coordinates) {
                return(
                    <div>
                        <Card style={{ backgroundColor: '#FFA500'}} >
                            <CardTitle style={{textAlign: 'center', fontSize: '2rem', fontWeight: 'bold'}}>Building Info</CardTitle>
                            <CardBody style={{textAlign: 'center', fontWeight: 'bold'}} >
                                <p>Code: {directory.code}</p>
                                <p>Name: {directory.name}</p>
                                <p>Coordinates not defined</p>
                                <p>Address: {directory.address}</p>
                            </CardBody>
                        </Card>
                    </div>
                );
            }
            else if(directory.coordinates && !directory.address) {
            return(
                <div>
                    <Card style={{ backgroundColor: '#FFA500'}} >
                        <CardTitle style={{textAlign: 'center', fontSize: '2rem', fontWeight: 'bold'}}>Building Info</CardTitle>
                        <CardBody style={{textAlign: 'center', fontWeight: 'bold'}} >
                            <p>Code: {directory.code}</p>
                            <p>Name: {directory.name}</p>
                            <p>Latitude: {directory.latitude}</p>
                            <p>Longitude: {directory.longitude}</p>
                            <p>Address not defined</p>
                        </CardBody>
                    </Card>
                </div>
            );
            }
            else {
                return(
                    <div>
                        <Card style={{ backgroundColor: '#FFA500'}} >
                            <CardTitle style={{textAlign: 'center', fontSize: '2rem', fontWeight: 'bold'}}>Building Info</CardTitle>
                            <CardBody style={{textAlign: 'center', fontWeight: 'bold'}} >
                                <p>Code: {directory.code}</p>
                                <p>Name: {directory.name}</p>
                              
                                <p>Coordinates not defined </p>
                                <p>Address not defined</p>
                            </CardBody>
                        </Card>
                    </div>
                );
            }
        }
        
        return (
            <div>
                <Card style={{ backgroundColor: '#FFA500'}} >
                        <CardTitle style={{textAlign: 'center', fontSize: '2rem', fontWeight: 'bold'}}>Building Info</CardTitle>
                        <CardBody style={{textAlign: 'center', fontWeight: 'bold'}} >
                            <p>Code: {directory.code}</p>
                            <p>Name: {directory.name}</p>
                            <p>Latitude: {directory.coordinates.latitude}</p>
                            <p>Longitude: {directory.coordinates.longitude}</p>
                            <p>Address: {directory.address}</p>
                        </CardBody>
                    </Card>
            </div>
        );
    }
}

export default BuildingInfo;

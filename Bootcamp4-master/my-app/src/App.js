import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding'
import uuid from 'uuid';
import { Container } from 'reactstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: this.props.data
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    });
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    });
  }

  //add building to directory when user clicks on 'submit'
  addBuilding = (code, name, address, latitude, longitude) => {
    const newBuilding = {
      id: uuid.v4(),
      code: code,
      name: name,
      address: address
    }
    this.setState({ data: [...this.state.data, newBuilding] });
  }

  //delete building from directory when user clicks 'x'
  delBuilding = (id) => {
    this.setState({ data: [...this.state.data
      .filter(building => building.id !== id)] });
  }


  render() {
    
    //console.log(this.state.data)

    return (
      
      <div className="bg">

        <div>
          <h1 className="websiteTitle">UF Directory App</h1>
        </div>
        
        <Search 
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />

        <Container>

          <AddBuilding 
            addBuilding={this.addBuilding}
          />

        </Container>

      
        
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    delBuilding={this.delBuilding}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                data={this.state.data}
                selectedBuilding={this.state.selectedBuilding}
              />
            </div>
          </div>
          {/* <h3>Add Building</h3> */}
          
          <Credit />
          
          
          
            
        </main>
       
      </div>
      
    );
  }
}

export default App;

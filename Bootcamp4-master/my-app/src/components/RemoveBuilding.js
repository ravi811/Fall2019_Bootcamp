import React from 'react';


class RemoveBuilding extends React.Component{



    
    
    

    render() {

        const { id } = this.props.directory;
        

        return(
            <div>
                <button 
                    type="button" 
                    class="btn btn-danger btn-sm"
                    onClick={this.props.delBuilding.bind(this, id)}
                >
                    x
                </button>
            </div>
        );
    }

    
}



export default RemoveBuilding;
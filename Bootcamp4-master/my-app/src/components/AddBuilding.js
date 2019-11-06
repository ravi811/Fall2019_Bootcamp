import React from 'react';
import { 
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';


class AddBuilding extends React.Component{
    state = {
        modal: false,
        id: '',
        code: '',
        name: '',
        address: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addBuilding(this.state.code, this.state.name);
        this.setState({
            id: '',
            code: '',
            name: '',
            address: ''
        });

        this.toggle();
    }
    
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    

    render() {


        return(
            <div>

                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >Add Listing</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add To Directory</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="listing"></Label>
                                <Input 
                                    type="text" 
                                    name="name"
                                    id="listing-name"
                                    placeholder="Enter building name"
                                    onChange={this.onChange}
                                ></Input>
                                <Input 
                                    type="text" 
                                    name="code"
                                    id="listing-code"
                                    placeholder="Enter building code"
                                    onChange={this.onChange}
                                ></Input>
                                <Input 
                                    type="text" 
                                    name="address"
                                    id="listing-address"
                                    placeholder="Enter address"
                                    onChange={this.onChange}
                                ></Input>
                                <Button
                                    color="dark"
                                    style={{ marginTop: '2rem' }}
                                    block
                                >Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>



               
                 {/* <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="code"
                        placeholder="Enter building code..."
                        value={this.state.code}
                        onChange={this.onChange}
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter building name..."
                        value={this.state.name}
                        onChange={this.onChange}
                    />
                    
                    <input
                        type="submit"
                        value="Submit"
                        
                    />
                    
                </form>  */}
            </div>
        );
    }

    
}



export default AddBuilding;

import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousels from './carousels';

class ModelPop extends Component {
    state = { 
        show: true
     }

     handleClose = () => {
         this.setState({
             show: false
         });
     }

    render() { 
        const paths = this.props.location.pathname;
        const a = paths.split('/');
        return ( 
        <React.Fragment>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Carousels ancornameprop={a[1]} />
                </Modal.Body>
            </Modal>
      </React.Fragment>
         );
    }
}
 
export default ModelPop;


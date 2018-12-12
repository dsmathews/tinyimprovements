import React from 'react';
import * as $ from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap';
import Mode from './Mode';

class ModeLoad extends React.Component {
    state = {
        users: [],
        modal: false,
        title: '',
        message: '',
        sender: '',
        receiver: '',
        alert: {
            type: '',
            message: ''
        }
    }

    getUsers = () => {
        $.get('/api/user')
            .then((result) => {
                this.setState({ users: result.data });
            })
            console.log(this.result);
    }
    componentDidMount() {
        this.getUsers();
        console.log(this.state)
    }

    modalToggle = () => {
        this.setState({
            modal: !this.state.modal,
            title: '',
            message: '',
            sender: '',
            receiver: '',
            alert: {
                type: '',
                message: ''
            }
        })
    }
    formChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    validateForm = (kudo) => {
        for (let field in kudo) {
            if (kudo[field] === '')
                return false;
        }

        return true;
    }
    handlePost = (event) => {
        event.preventDefault();

        let kudo = {
            title: this.state.title,
            body: this.state.body,
            to: this.state.sender,
            from: this.state.receiver
        }

        if (this.validateForm(kudo)) {
            $.post('/api/kudos', kudo)
                .then(() => {
                    this.modalToggle();
                    this.props.getCards();
                })
        } else {
            this.setState({
                alert: {
                    type: 'danger',
                    message: 'Please check your inputs and try again'
                }
            })
        }
    }
    render() {
        return (
            <div>
                <Button className="btn" onClick={this.modalToggle}>Post Kudos</Button>

                <Modal isOpen={this.state.modal} toggle={this.modalToggle} className={this.className}>
                    <ModalHeader className='modalheader' toggle={this.modalToggle}><p className='heading'>Share some happiness!</p></ModalHeader>
                    <ModalBody className='modalbody'>
                        <Mode
                            users={this.state.users}
                            formChange={this.formChange}
                        />
                        <Alert color={this.state.alert.type}>
                            {this.state.alert.message}
                        </Alert>
                    </ModalBody>
                    <ModalFooter className='modalfooter'>
                        <Button className='btn'  onClick={this.handlePost}> Post Kudo </Button>
                        <Button className='btn'  onClick={this.modalToggle}> Cancel </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default ModeLoad;

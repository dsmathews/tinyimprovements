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
        $.get('/api/users')
            .then((result) => {
                this.setState({ users: result.data });
            });
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
                <Button className="btn" color="info" onClick={this.modalToggle}>Post Kudos</Button>

                <Modal isOpen={this.state.modal} toggle={this.modalToggle} className={this.className}>
                    <ModalHeader toggle={this.modalToggle}>THANKS!</ModalHeader>
                    <ModalBody>
                        <Mode
                            users={this.state.users}
                            formChange={this.formChange}
                        />
                        <Alert color={this.state.alert.type}>
                            {this.state.alert.message}
                        </Alert>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handlePost}> Post Kudo </Button>
                        <Button color="secondary" onClick={this.modalToggle}> Cancel </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default ModeLoad;

import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

const Mode = (props) => (
  <div>
    <Form>
      <FormGroup>
        {/* Sender Dropdown Menu */}
        <Input className="btn btn-secondary" type="select" name="sender" onChange={props.formChange}>
          <option selected disabled value=''>Sender</option>
          {props.users.map((user, i) => <option value={user._id} key={user._id} >{user.name}</option>)}
        </Input>

        {/* Title Input Field */}
        <Input type="text" name="title" placeholder="Enter a title.." onChange={props.formChange}/>

        {/* Second Input Field */}
        <Input type="textarea" name="body" placeholder="Enter a message.." onChange={props.formChange}/>

        <Input className="btn btn-secondary" type="select" name="receiver" onChange={props.formChange}>
          <option selected disabled value=''>Receiver</option>
          {props.users.map((user, i) => <option value={user._id} key={i} >{user.name}</option>)}
        </Input>
      </FormGroup>
    </Form>
  </div>
);

export default Mode;
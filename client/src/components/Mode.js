import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

const Mode = (props) => (
  <div>
    <Form>
      <FormGroup>
        <div>{props.users.username}</div>
        {/* Sender Dropdown Menu */}
        <Input className="btn btn-success" type="select" name="sender" onChange={props.formChange}>
          {/* <option disabled value='FROM'>FROM</option> */}
          {props.users.map((user) => 
          (<option value={user._id} key={user._id}>{user.username}</option>)
          )}
        </Input>
        <Input className="btn btn-secondary" type="select" name="receiver" onChange={props.formChange}>
          <option disabled value='TO'>TO</option>
          {props.users.map((user) => <option value={user._id} key={user._id}>{user.username}</option>)}
        </Input>
        {/* Title Input Field */}
        <Input type="text" name="title" placeholder="Enter a title.." onChange={props.formChange}/>

        {/* Second Input Field */}
        <Input type="textarea" name="body" placeholder="Enter a message.." onChange={props.formChange}/>
      </FormGroup>
    </Form>
  </div>
);

export default Mode;
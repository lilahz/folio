import React from 'react';
import { FormGroup, FormFeedback, Input, Form} from 'reactstrap';


const LoginForm = (props) => (
        <div>
            <Form> 
                <FormGroup>
                    <Input id="email" type="email" value={props.state.email} onChange={props.handleChange}
                    invalid={props.errors.email ? true : false} placeholder=" מייל *" />
                <FormFeedback>{props.errors.email}</FormFeedback>
            </FormGroup><br></br>

            <FormGroup>
                <Input id="password" type="password" value={props.state.password} onChange={props.handleChange}
                    invalid={props.errors.password ? true : false} placeholder=" סיסמא *" />
                <FormFeedback>{props.errors.password}</FormFeedback>
            </FormGroup> <br></br>
            </Form>      
        </div>
);

export default LoginForm;
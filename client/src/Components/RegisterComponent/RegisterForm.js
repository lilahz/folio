import React, { useState } from 'react';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import classes from './RegisterForm.module.css';

const RegisterForm = props => {
    const [state, setState] = useState({
      register_info: {
        company_name: "",
        email: "",
        password: "",
        confirm_password: "",
        phone_number: "",
        website: "",
        about: ""
      },
      error: false
    })
    const [validated, setValidated] = useState(false);

    const sendDetailsToServer = (event) => {
      const data = {
        method: "POST",
        cache: "no-cache",
        headers:{
            "content_type": "application/json",
        },
        body: JSON.stringify(state)
      };
      console.log("sending data ", data)
      
      fetch('/auth/company_register', data)
        .then(response => {
          console.log(response)
        })
    }


    const handleSubmitClicked = (e) => {
      e.preventDefault();
      console.log("current state ", state)
      // TODO: add form validation - name cannot be empty, email validation, password validation, ... 
      sendDetailsToServer(e);
    }

    return (
      <div>
        <h1>register</h1>
        <Form className={classes.Form}>
          <InputGroup className="mb-3" validated={validated}>
            <FormControl
              id="company"
              placeholder="Company Name"
              aria-label="company_name"
              aria-describedby="basic-addon1"
              value={state.company_name}
              onChange={e => setState((prevState) => 
                ({...prevState,
                company_name: e.target.value})
              )}
            />
            <FormControl.Feedback type="invalid">
                  Please enter valid username. 
            </FormControl.Feedback>
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Email"
              aria-label="email"
              aria-describedby="basic-addon2"
              value={state.email}
              onChange={e => setState((prevState) => 
                ({...prevState,
                  email: e.target.value})
              )}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Password"
              aria-label="password"
              aria-describedby="basic-addon1"
              type="password"
              value={state.password}
              onChange={e => setState((prevState) => 
                ({...prevState,
                  password: e.target.value})
              )}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Repeat Password"
              aria-label="confirm_password"
              aria-describedby="basic-addon1"
              type="password"
              value={state.confirm_password}
              onChange={e => setState((prevState) => 
                ({...prevState,
                  confirm_password: e.target.value})
                )}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Phone Number"
              aria-label="phone_number"
              aria-describedby="basic-addon2"
              value={state.phone_number}
              onChange={e => setState((prevState) => 
                ({...prevState,
                  phone_number: e.target.value})
                )}
            />
          </InputGroup>

          <label htmlFor="basic-url">Your vanity URL</label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon3">
                https://
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl 
              id="basic-url" 
              aria-describedby="website" 
              placeholder="URL"
              value={state.website}
              onChange={e => setState((prevState) => 
                ({...prevState,
                  website: e.target.value})
                )}
            />
          </InputGroup>

          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>About Us</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl 
              as="textarea" 
              aria-label="about" 
              value={state.about}
              onChange={e => setState((prevState) => 
                ({...prevState,
                  about: e.target.value})
                )}
            />
          </InputGroup>
        </Form>

        <div className={classes.Buttons}>
          <Button
            className={classes.Button}
            href="/register/junior"
            variant="outline-secondary"
            style={{margin: "8px"}}
            // onClick={handleSubmitClicked}
            block>
              submit
          </Button>
        </div>
      </div>
    );
};

export default RegisterForm;

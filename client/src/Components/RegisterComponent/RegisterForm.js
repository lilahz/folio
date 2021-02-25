import React, { useState } from 'react';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';

import classes from './RegisterForm.module.css';

const RegisterForm = props => {
    const [state, setState] = useState({
      company_name: "",
      email: "",
      password: "",
      confirm_password: "",
      phone_number: "",
      website: "",
      about: ""
    })

    // const sendDetailsToServer = () => {
    //   fetch('/')
    // }

    // const handleSubmitClicked = (e) => {
    //   e.preventDefault();
    //   if (state.password === state.confirm_password) {
    //     sendDetailsToServer();
    //   }
    //   console.log("current state ", state)
    // }

    return (
      <div>
        <h1>register</h1>
        <Form className={classes.Form}>
          <InputGroup className="mb-3">
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

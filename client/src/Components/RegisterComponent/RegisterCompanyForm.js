import React from 'react';
import { FormGroup, FormFeedback, Input, Form, Col, Row, Button} from 'reactstrap';


const RegisterCompanyFormFirst = (props) => (   
    <Form> 
        <FormGroup>
            <Input id="company_name" type="text" value={props.state.company_name} onChange={props.handleChange} 
                invalid={props.errors.company_name ? true : false} placeholder="שם העמותה *"/>
            <FormFeedback>{props.errors.company_name}</FormFeedback>
        </FormGroup> <br></br>
        <FormGroup>
            <Input id="email" type="email" value={props.state.email} onChange={props.handleChange}
                invalid={props.errors.email ? true : false} placeholder="מייל *" />
            <FormFeedback>{props.errors.email}</FormFeedback>
        </FormGroup><br></br>
        <FormGroup>
            <Input id="password" type="password" value={props.state.password} onChange={props.handleChange}
                invalid={props.errors.password ? true : false} placeholder="סיסמא *" />
            <FormFeedback>{props.errors.password}</FormFeedback>
        </FormGroup> <br></br>
        <FormGroup>
            <Input id="confirm_password" type="password" value={props.state.confirm_password} onChange={props.handleChange}
                invalid={props.errors.confirm_password ? true : false} placeholder="חזור על הסיסמא *" />
            <FormFeedback>{props.errors.confirm_password}</FormFeedback>
        </FormGroup> <br></br>
        </Form>
)

const RegisterCompanyFormSecond = (props) => ( 
    <Form>
        <FormGroup>
            <Input id="phone_number" type="tel" value={props.state.phone_number} onChange={props.handleChange} placeholder="Phone Number" />
        </FormGroup> <br></br>
        {props.state.website.map((x, i) => {
            return (
                <Row>
                <Col>
                    <FormGroup>
                        <Input id="website_label" type="select" value={x.label} onChange={e=>props.handleChangeWebsite(e,i,'label')}
                            invalid={props.errors.website ? true : false}>
                                <option>אתר החברה</option>
                                <option>פייסבוק</option>
                                <option>אינסטגרם</option>
                                </Input>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Input id="website" type="text" value={x.url} onChange={e=>props.handleChangeWebsite(e,i,'url')}
                            invalid={props.errors.website ? true : false} placeholder="לינק *" />
                        <FormFeedback>{props.errors.website}</FormFeedback>
                    </FormGroup> <br></br>
                </Col>
                <Col>
                    {props.state.website.length !== 1 && 
                        <Button variant="primary" onClick={() => props.handleRemoveClick(i)}> הסר </Button>}
                    {props.state.website.length - 1 === i && 
                        <Button variant="primary" onClick={() => props.handleAddClick(i)}> הוסף </Button>}
                </Col>
                </Row>
            ); })}
        <FormGroup>
                <Input id="about_me" type="text" value={props.state.about_me} onChange={props.handleChange}
                invalid={props.errors.about_me ? true : false} placeholder="ספר קצת על העמותה *" />
            <FormFeedback>{props.errors.about_me}</FormFeedback>
        </FormGroup> <br></br>
        <FormGroup>
            <Input type="file" name="profile_picture" id="profile_picture" accept="image/* "
                onChange={props.handleChangePicture}/>
        </FormGroup> <br></br>
    </Form>
)

export {RegisterCompanyFormFirst, RegisterCompanyFormSecond };
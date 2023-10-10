import {StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText} from './../components/styles.js';

import Logo from './../assets/logo.png';

import {Formik, Form} from 'formik';

import {TextInput} from '../components/FormLib.js';
import * as Yup from 'yup'; 

import{FiMail, FiLock} from 'react-icons/fi';

const Login = () => {
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}> Member Login </StyledTitle>

                <Formik
                    initialValues={{
                        email: "", 
                        password: "", 
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("Invalid email address").required("Required"), password: Yup.string().min(8, "Password is too short").required("Required"), 
                        })
                    }
                    onSubmit={(values, {setSubmitting}) => {
                        console.log(values);
                    }}
                >

                    {() => (
                        <Form>
                            <TextInput 
                                name = "email"
                                type = "email"
                                label = "Email Address"
                                placeholder= "email address"
                                icon = {<FiMail/>}
                            
                            />
                            <br></br>
                            <TextInput 
                                name = "password"
                                type = "password"
                                label = "Password"
                                placeholder= "password"
                                icon = {<FiLock/>}
                            
                            />

                            <ButtonGroup>
                                <StyledFormButton type="submit">Login</StyledFormButton>

                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>

                <ExtraText>New here? <TextLink to="/register">Sign Up</TextLink></ExtraText>
                
            </StyledFormArea>

            <CopyrightText>
                All rights reserved to &copy; 2023
            </CopyrightText>
        </div>
    )
}

export default Login;
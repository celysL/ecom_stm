import {StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar, StyledTitle, colors, ButtonGroup} from './../components/styles.js';

import Logo from './../assets/logo.png';

import {Formik, Form} from 'formik';

import {TextInput} from '../components/FormLib.js';

const Login = () => {
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}> Member Login </StyledTitle>

                <Formik>
                    {() => (
                        <Form>
                            <TextInput 
                                name = "email"
                                type = "email"
                                label = "Email Address"
                                placeholder= "email address"
                            
                            />
                            <br></br>
                            <TextInput 
                                name = "password"
                                type = "password"
                                label = "Password"
                                placeholder= "password"
                            
                            />

                            <ButtonGroup>
                                <StyledFormButton type="submit">Login</StyledFormButton>

                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                
            </StyledFormArea>
        </div>
    )
}

export default Login;
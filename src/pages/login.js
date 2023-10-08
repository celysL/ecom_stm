import {StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar, StyledTitle, colors} from './../components/styles.js';

import Logo from './../assets/logo.png';

import {Formik, Form} from 'formik';

const Login = () => {
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}> Member Login </StyledTitle>
                
            </StyledFormArea>
        </div>
    )
}

export default Login;
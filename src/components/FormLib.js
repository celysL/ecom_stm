import {useState} from 'react';
import {useField} from 'formik';

import {StyledTextInput, StyledLabel, StyledIcon} from "./../components/styles.js";

import {FiEyeOff, FiEye} from 'react-icons/fi';

export const TextInput = ({icon, ...props}) => {
    const[field, meta] = useField(props);
    const [show, setShow] = useState(false);

    return (

        <div style={{position: "relative"}} >
            <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>

            {props.type !== "password" &&  <StyledTextInput {...field} {...props} />}

            {props.type === "password" && (
                <StyledTextInput 
                    {...field} {...props}
                    type = {show ? "text": "password"}
                />
                
            )}

            <StyledIcon>{icon}</StyledIcon>

            { 
                props.type === "password" && 
                <StyledIcon onClick={() => setShow(!show)} right> 
                    {show && <FiEye/>}
                    {!show && <FiEyeOff/>}
                </StyledIcon>
            }
            
        </div>

    )

}
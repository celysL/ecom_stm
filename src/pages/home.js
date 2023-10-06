import {StyledTitle, StyledSubTitle, Avatar} from "./../components/styles.js";

import Logo from "./../assets/logo.png";

const Home = () => {
    return (
        <div>

            <div>
                {/* <Avatar></Avatar> */}
            </div>

                <StyledTitle size={65}>
                    Bienvenue à bord à la STM!
                </StyledTitle>
                <StyledSubTitle size={27}>
                    Feel free to explore our site 
                </StyledSubTitle>
            
        </div>
    );
};

export default Home;
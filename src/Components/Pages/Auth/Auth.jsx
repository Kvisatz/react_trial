
import Styles from './Auth.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import logo_form from '../../.././images/logo-form.svg'
import InputField from '../../UI/InputField/InputField';
import Button from '../../UI/Button/Button';
import Checkbox from '../../UI/Checkbox/Checkbox';


function Auth() {
  return (
    <div className={Styles.Auth}>
        <div className={Styles.AuthWrap}>
            <div className={Styles.info}>
                <h3>Преимущества</h3>
            </div>
            <div className={Styles.AuthFormWrap}>

                <img src={logo_form}/>
                <h3>Welcome</h3>

                <div className={Styles.AuthForm}>
                    <InputField placeholder="email" type="text"/>
                    <InputField placeholder="password" type="password"/>
                    
                    <Checkbox/>

                    <p>Lost Password?</p>

                    <Button>Log into your account</Button>

                    <p>Registration</p>
                </div>
            
            </div>
        </div>
    </div>
  );
}

export default Auth;

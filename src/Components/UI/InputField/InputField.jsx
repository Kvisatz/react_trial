
import Styles from './InputField.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo_form from '../../.././images/logo-form.svg'

function InputField(props) {
    let type = props.type;
    let placeholder = props.placeholder;
    return (
        <div className={Styles.InputField}>
            <FontAwesomeIcon icon={faUser} />
            <input type={type} placeholder={placeholder} />
        </div>
    );
}

export default InputField;

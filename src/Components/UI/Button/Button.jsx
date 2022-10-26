
import Styles from './Button.module.scss';


function Button(props) {
  return (
    <div className={Styles.Button}>
        <button>{props.children}</button>
    </div>
  );
}

export default Button;

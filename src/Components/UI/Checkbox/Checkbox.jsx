
import Styles from './Checkbox.module.scss';


function Checkbox(props) {
  return (
    <div className={Styles.Checkbox}>
        <label>
            <input type="checkbox" />
            123
        </label>
    </div>
  );
}

export default Checkbox;

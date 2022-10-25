
import './button.styles.scss';

const Button = ({id, style, disabled, children}) => {
    return (
        <button disabled={disabled} key={id} className={style}>{children}</button>
    )
}


export default Button;
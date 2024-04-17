function Button(props: { label: string, handleClick: () => void, customClassName?: string }) {
    const className = props.customClassName || '';
    return (
        <button onClick={props.handleClick} className={`button ${className}`}>
            {props.label}
        </button>
    );
}
export default Button;

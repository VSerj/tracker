const Button = ({ className, onAction, children }) => {
  return (
    <button className={className} onClick={onAction}>
      {children}
    </button>
  );
};

export default Button;

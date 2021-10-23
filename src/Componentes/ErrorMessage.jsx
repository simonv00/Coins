import './App.css'

const ErrorMessage = ({ children }) => {
    return (
      <div className="error">
        <p id='error'>{children}</p>
      </div>
    );
  };

  export default ErrorMessage
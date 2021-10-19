import errorGif from './error.gif'

const ErrorMessage = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={errorGif} style={{height: '200px'}} alt="error"></img>
        </div>
    );
};

export default ErrorMessage;
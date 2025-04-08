import logo from '../assets/img/LogoFundacionKinal.jpg';

export const Logo = () => {
    return (
        <div className="auth-form-logo-container">
            <img src={logo} alt="LogoKinal"/>
            <span>{text}</span>
        </div>
    );
}
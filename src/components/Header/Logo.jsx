import logo from "../../images/logo.svg";
import './Logo.css';

const Logo = () => {
	return (
		<a href="/">
			<img src={logo} className="header-logo" alt="logo"/>
		</a>
	);
}
export default Logo;
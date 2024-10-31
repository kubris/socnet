import logo from "../../images/logo.svg";
import './Header.css';
import Navbar from "./Navbar";

const Header = () => {
	return (
		<>
			<header className="header">
				<div className="container-fluid">
					<Navbar />
				</div>
			</header>
		</>
	);
}

export default Header;
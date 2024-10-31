import './Aside.css';

const Aside = () => {
	return (
		<>
			<aside className="aside">
				<ul>
					<li><a href="#s">Profile</a></li>
					<li><a href="#s">Message</a></li>
					<li><a href="#s">News</a></li>
					<li><a href="#s">Music</a></li>
				</ul>
				<a href="#s">Settings</a>
			</aside>
		</>
	);
}

export default Aside;
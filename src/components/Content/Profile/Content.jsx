import './Content.css';
import TopBg from "./TopBg";
import MyPosts from "./MyPosts";
import MyInfo from "./MyInfo";
import NewPost from "./NewPost";
import OutPosts from "./OutPosts";

const Content = () => {
	return (
		<main className="main">
			<TopBg />
			<MyInfo />
			<MyPosts />
			<NewPost />
			<OutPosts />
		</main>
	);
}

export default Content;
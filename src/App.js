import React from "react";
import "./App.css";
import profile from "./profile.jpg";

function App() {
	return (
		<div className='App'>
			<h1 style={{ color: "red", fontSize: "36px" }}>
				{" "}
				Workshop React JSX & Components
			</h1>
			<p></p>
			<br />
			<img src={profile} alt='profile-pic' />
			<img
				style={{ width: "40%" }}
				src='https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png'
				alt='profile-img'
			/>
		</div>
	);
}

export default App;

import React from "react";
import Navigation from "components/navigation/Navigation";
import { Outlet } from "react-router-dom";

const Root: React.FC = () => {
	return (
		<div className="flex h-screen flex-col">
			<section className="flex grow flex-col">
				<Outlet />
			</section>
			<Navigation />
		</div>
	);
};

export default Root;

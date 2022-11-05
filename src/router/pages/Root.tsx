import React from "react";
import Navigation from "components/navigation/Navigation";
import { Outlet } from "react-router-dom";

const Root: React.FC = () => {
	return (
		<div className="flex h-screen flex-col pt-4">
			<section className="grow">
				<Outlet />
			</section>
			<Navigation />
		</div>
	);
};

export default Root;

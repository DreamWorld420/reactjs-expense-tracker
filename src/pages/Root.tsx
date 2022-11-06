import React from "react";
import { Outlet } from "react-router-dom";

import Navigation from "@Components/navigation/Navigation";

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

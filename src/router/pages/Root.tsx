import React from "react";
import Navigation from "components/navigation/Navigation";
import { Outlet } from "react-router-dom";

const Root: React.FC = () => {
	return (
		<div className="pt-4">
			<Outlet />
			<Navigation />
		</div>
	);
};

export default Root;

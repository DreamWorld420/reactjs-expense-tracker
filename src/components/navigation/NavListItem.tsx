import React from "react";
import { NavLink } from "react-router-dom";

interface IProps {
	children: React.ReactNode;
	to: string;
}

const activeStyle = {
	opacity: 1,
};

const NavListItem: React.FC<IProps> = ({ children, to }) => {
	return (
		<li className="flex flex-col justify-center">
			<NavLink
				to={to}
				className="opacity-30 transition-opacity hover:opacity-100"
				style={({ isActive }) => (isActive ? activeStyle : undefined)}
			>
				{children}
			</NavLink>
		</li>
	);
};

export default NavListItem;

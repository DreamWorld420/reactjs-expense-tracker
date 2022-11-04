import React from "react";
import { NavLink } from "react-router-dom";
import {
	AiFillHome,
	AiFillWallet,
	AiFillPlusCircle,
	AiFillPieChart,
	AiFillSetting,
} from "react-icons/ai";

const activeStyle = {
	opacity: 1,
};

const Navigation: React.FC = () => {
	return (
		<nav className="fixed bottom-0 left-0 h-16 w-screen">
			<ul className="flex flex-row items-center justify-between px-8">
				<li className="flex flex-col justify-center">
					<NavLink
						to="/"
						className="opacity-30 transition-opacity hover:opacity-100"
						style={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						<AiFillHome size={25} />
					</NavLink>
				</li>
				<li className="flex flex-col justify-center">
					<NavLink
						to="/wallet"
						className="opacity-30 transition-opacity hover:opacity-100"
						style={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						<AiFillWallet size={25} />
					</NavLink>
				</li>
				<li className="flex flex-col justify-center">
					<button className="flex flex-col justify-center drop-shadow">
						<AiFillPlusCircle size={45} />
					</button>
				</li>
				<li className="flex flex-col justify-center">
					<NavLink
						to="/chart"
						className="opacity-30 transition-opacity hover:opacity-100"
						style={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						<AiFillPieChart size={25} />
					</NavLink>
				</li>
				<li className="flex flex-col justify-center">
					<NavLink
						to="/settings"
						className="opacity-30 transition-opacity hover:opacity-100"
						style={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						<AiFillSetting size={25} />
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;

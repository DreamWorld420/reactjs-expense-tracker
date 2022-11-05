import React from "react";
import {
	AiFillHome,
	AiFillWallet,
	AiFillPlusCircle,
	AiFillPieChart,
	AiFillSetting,
} from "react-icons/ai";
import NavListItem from "./NavListItem";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
	return (
		<div className="h-16">
			<nav className="fixed bottom-0 left-0 h-16 w-screen">
				<ul className="flex flex-row items-center justify-between px-8">
					<NavListItem to="/">
						<AiFillHome size={25} />
					</NavListItem>

					<NavListItem to="wallet">
						<AiFillWallet size={25} />
					</NavListItem>

					{/* Add Button */}
					<li className="flex flex-col justify-center">
						<Link className="flex flex-col justify-center" to="add">
							<AiFillPlusCircle
								size={45}
								className="drop-shadow"
							/>
						</Link>
					</li>

					<NavListItem to="chart">
						<AiFillPieChart size={25} />
					</NavListItem>

					<NavListItem to="settings">
						<AiFillSetting size={25} />
					</NavListItem>
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;

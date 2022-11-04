import React from "react";
import { useLocation, type Location } from "react-router-dom";
import {
	AiFillHome,
	AiFillWallet,
	AiFillPlusCircle,
	AiFillPieChart,
	AiFillSetting,
} from "react-icons/ai";

const Navigation: React.FC = () => {
	const location = useLocation();

	const calcOpacity = (path: string) => {
		return location.pathname === `/${path}` ? 1 : undefined;
	};

	return (
		<nav className="fixed bottom-0 left-0 h-16 w-screen">
			<ul className="flex flex-row items-center justify-between px-8">
				<li className="flex flex-col justify-center">
					<button
						className="opacity-30 transition-opacity hover:opacity-100"
						style={{
							opacity: calcOpacity(""),
						}}
					>
						<AiFillHome size={25} />
					</button>
				</li>
				<li className="flex flex-col justify-center">
					<button
						className="opacity-30 transition-opacity hover:opacity-100"
						style={{
							opacity: calcOpacity("wallet"),
						}}
					>
						<AiFillWallet size={25} />
					</button>
				</li>
				<li className="flex flex-col justify-center">
					<button className="flex flex-col justify-center drop-shadow">
						<AiFillPlusCircle size={45} />
					</button>
				</li>
				<li className="flex flex-col justify-center">
					<button
						className="opacity-30 transition-opacity hover:opacity-100"
						style={{
							opacity: calcOpacity("chart"),
						}}
					>
						<AiFillPieChart size={25} />
					</button>
				</li>
				<li className="flex flex-col justify-center">
					<button
						className="opacity-30 transition-opacity hover:opacity-100"
						style={{
							opacity: calcOpacity("settings"),
						}}
					>
						<AiFillSetting size={25} />
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;

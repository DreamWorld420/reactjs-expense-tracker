import React from "react";
import { type IconType } from "react-icons";

interface IProps {
	icon: IconType;
	color: string;
	desc: string;
	children: React.ReactNode;
	IconBG: string;
}

const StatsCard: React.FC<IProps> = ({
	icon: Icon,
	color,
	children,
	desc,
	IconBG,
}) => {
	return (
		<div className="flex grow items-center gap-x-2 rounded bg-white py-2 px-4 shadow-2xl">
			<div
				className="flex h-fit flex-col justify-center rounded p-2"
				style={{
					backgroundColor: IconBG,
				}}
			>
				<Icon color={color} />
			</div>
			<section className="leading-tight">
				<p
					className="font-robotoMono"
					style={{
						color,
					}}
				>
					{children}%
				</p>
				<p className="text-xs">{desc}</p>
			</section>
		</div>
	);
};

export default StatsCard;

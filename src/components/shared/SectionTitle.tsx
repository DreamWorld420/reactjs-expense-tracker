import React from "react";

interface IProps {
	children: React.ReactNode;
	as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	className: string;
}

const SectionTitle: React.FC<IProps> = ({
	className,
	children,
	as: Component,
}) => {
	return (
		<Component className={`${className} font-oswald tracking-wider`}>
			{children}
		</Component>
	);
};

SectionTitle.defaultProps = {
	as: "h2",
};

export default SectionTitle;

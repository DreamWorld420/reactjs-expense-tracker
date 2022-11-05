import React from "react";
import { motion } from "framer-motion";

const initialAnimation = {
	y: +200,
};

const animation = {
	y: 0,
};

const AddTransaction: React.FC = () => {
	return (
		<motion.div
			className="grow"
			initial={initialAnimation}
			animate={animation}
		>
			AddTransaction
		</motion.div>
	);
};

export default AddTransaction;

import React from "react";
import { useAppSelector } from "app/hooks";

const HomeTransactions: React.FC = () => {
	const transactions = useAppSelector((state) => state.transactions.value);

	if (!transactions.length) {
		return (
			<div className="shadow-4xl flex grow flex-col items-center justify-center rounded-2xl bg-white font-robotoMono leading-loose drop-shadow-2xl">
				<p>No transactions found!</p>
				<p>Try adding one</p>
			</div>
		);
	}

	// TODO: implement state when there are transactions
	return null;
};

export default HomeTransactions;

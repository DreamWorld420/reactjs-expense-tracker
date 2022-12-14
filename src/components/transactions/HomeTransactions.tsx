import React from "react";
import { useAppSelector } from "app/hooks";
import TransactionCard from "./TransactionCard";

const HomeTransactions: React.FC = () => {
	const lastTenTransactions = useAppSelector((state) =>
		state.transactions.value.slice(-10)
	);

	// No transaction available
	if (!lastTenTransactions.length) {
		return (
			<div className="shadow-4xl flex grow flex-col items-center justify-center rounded bg-white font-robotoMono leading-loose drop-shadow-2xl">
				<p>No transactions found!</p>
				<p>Try adding one</p>
			</div>
		);
	}

	// container div must have any specific height so
	// that it grows and fill parent but overflows
	return (
		<div className="flex h-1 grow flex-col gap-y-2 overflow-auto">
			{lastTenTransactions.map((transaction) => {
				return (
					<React.Fragment
						key={`${transaction.value}${transaction.date}`}
					>
						<TransactionCard transaction={transaction} />
					</React.Fragment>
				);
			})}
		</div>
	);
};

export default HomeTransactions;

import React from "react";
import { useAppSelector } from "app/hooks";
import { TransactionType } from "types";
import currencyFormatter from "utils/currencyFormatter";

const HomeTransactions: React.FC = () => {
	const lastTenTransactions = useAppSelector((state) =>
		state.transactions.value.slice(-10)
	);

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
			{lastTenTransactions.map(({ value, date, name, type }) => {
				return (
					<div
						key={`${value}${date}`}
						className="flex  items-center justify-between  rounded bg-white py-2 px-4 font-robotoMono"
					>
						<section className="flex flex-col">
							<h3 className="text-sm font-semibold">{name}</h3>
							<p className="text-xs text-gray-400">
								{new Date(date).toLocaleDateString("en-US", {
									year: "numeric",
									month: "long",
									day: "2-digit",
									hour: "numeric",
									minute: "numeric",
								})}
							</p>
						</section>
						<p className="text-sm">
							{currencyFormatter(
								Number(type) === TransactionType.EXPENSE
									? -value
									: value
							)}
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default HomeTransactions;

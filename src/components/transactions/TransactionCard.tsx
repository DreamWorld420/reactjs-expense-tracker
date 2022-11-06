import React from "react";
import Transaction from "@Types/Transaction.interface";
import TransactionType from "@Types/TransactionType.enum";
import currencyFormatter from "utils/currencyFormatter";

interface IProps {
	transaction: Transaction;
}

const TransactionCard: React.FC<IProps> = ({
	transaction: { value, date, name, type },
}) => {
	return (
		<div className="flex  items-center justify-between  rounded bg-white py-2 px-4 font-robotoMono">
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
					Number(type) === TransactionType.EXPENSE ? -value : value
				)}
			</p>
		</div>
	);
};

export default TransactionCard;

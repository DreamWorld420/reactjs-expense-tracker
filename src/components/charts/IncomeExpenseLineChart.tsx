import React from "react";
import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

import { useAppSelector } from "@App/hooks";

import Transaction from "@Types/Transaction.interface";
import TransactionType from "@Types/TransactionType.enum";

const IncomeExpenseLineChart: React.FC = () => {
	const transactions = useAppSelector((state) => state.transactions.value);

	const data = React.useMemo(() => {
		const dataArr: {
			date: Date;
			income: number;
			expense: number;
		}[] = [];

		// FIXME: implement unique array date

		transactions.forEach((current) => {
			const currentDate = new Date(current.date);
			const currentDayArr: Transaction[] = [];
			transactions.forEach((other) => {
				const otherDate = new Date(other.date);
				if (
					otherDate.getFullYear() === currentDate.getFullYear() &&
					otherDate.getMonth() === currentDate.getMonth() &&
					otherDate.getDate() === currentDate.getDate()
				) {
					currentDayArr.push(other);
				}
			});

			dataArr.push({
				date: currentDate,
				income: currentDayArr
					.filter(
						(transaction) =>
							Number(transaction.type) === TransactionType.INCOME
					)
					.reduce<number>((acc, curr) => acc + curr.value, 0),
				expense: currentDayArr
					.filter(
						(transaction) =>
							Number(transaction.type) === TransactionType.EXPENSE
					)
					.reduce<number>((acc, curr) => acc + curr.value, 0),
			});
		});

		return dataArr;
	}, [transactions]);

	return (
		<div>
			{/* <ResponsiveContainer width="100%" height="100%">
				<LineChart>
					<CartesianGrid strokeDasharray="3 3" />
				</LineChart>
			</ResponsiveContainer> */}
			<code>{JSON.stringify(data, null, 4)}</code>
		</div>
	);
};

export default IncomeExpenseLineChart;

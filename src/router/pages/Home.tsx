import { RootState } from "app/store";
import React from "react";
import { useSelector } from "react-redux";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import StatsCard from "components/stats/StatsCard";
import HomeTransactions from "components/transactions/HomeTransactions";
import currencyFormatter from "utils/currencyFormatter";

const Home: React.FC = () => {
	const balance = useSelector((state: RootState) => state.balance.value);

	return (
		<div className="flex grow flex-col">
			<h1 className="mt-16 w-full text-center font-robotoMono text-4xl">
				{currencyFormatter(balance)}
			</h1>
			<section className="mt-16 flex grow flex-col px-8">
				<section>
					<h2 className="font-oswald tracking-wider">Stats</h2>
					<section className="mt-2 flex gap-x-4">
						<StatsCard
							icon={AiFillCaretUp}
							color="#43e774"
							desc="Income"
							IconBG="#e1fbea"
						>
							{43}
						</StatsCard>
						<StatsCard
							icon={AiFillCaretDown}
							color="#f89708"
							desc="Expense"
							IconBG="#feefda"
						>
							{-24}
						</StatsCard>
					</section>
				</section>
				<section className="mt-4 mb-12 flex grow flex-col">
					<h2 className="mb-2 font-oswald tracking-wider">
						Last four transactions
					</h2>
					<HomeTransactions />
				</section>
			</section>
		</div>
	);
};

export default Home;

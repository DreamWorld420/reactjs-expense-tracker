import { RootState } from "app/store";
import React from "react";
import { useSelector } from "react-redux";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import StatsCard from "components/stats/StatsCard";

const Home: React.FC = () => {
	const balance = useSelector((state: RootState) => state.balance.value);

	return (
		<div>
			<h1 className="mt-16 w-full text-center font-robotoMono text-4xl">
				${balance.toPrecision(3).toString()}
			</h1>
			<section className="mt-16 px-8">
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
		</div>
	);
};

export default Home;

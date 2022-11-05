import { RootState } from "app/store";
import React from "react";
import { useSelector } from "react-redux";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

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
					<div className="flex grow items-center gap-x-2 rounded-2xl bg-white py-2 px-4">
						<div className="flex h-fit flex-col justify-center rounded-full bg-[#e1fbea] p-2">
							<AiFillCaretUp color="#43e774" />
						</div>

						<section className="leading-tight">
							<p className="font-robotoMono text-[#43e774]">
								+24%
							</p>
							<p className="text-xs">Income</p>
						</section>
					</div>
					<div className="flex grow items-center gap-x-2 rounded-2xl bg-white py-2 px-4">
						<div className="flex h-fit flex-col justify-center rounded-full bg-[#feefd9] p-2">
							<AiFillCaretDown color="#f89708" />
						</div>
						<section className="leading-tight">
							<p className="font-robotoMono text-[#f89708]">
								+24%
							</p>
							<p className="text-xs">Expense</p>
						</section>
					</div>
				</section>
			</section>
		</div>
	);
};

export default Home;

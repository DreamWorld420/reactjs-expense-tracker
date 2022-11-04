import React, { useState } from "react";
import Navigation from "components/navigation/Navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "app/store";
import { deposit, withdraw } from "features/balance/balanceSlice";

const Root: React.FC = () => {
	const balance = useSelector((state: RootState) => state.balance.value);
	const dispatch = useDispatch();
	const [balanceAmountInput, setBalanceAmountInput] = useState<number>(0);

	const handleBalanceInputChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setBalanceAmountInput(Number(e.target.value));
	};

	const handleDepositBalance = () => {
		dispatch(deposit(balanceAmountInput));
	};

	const handleWithdrawBalance = () => {
		dispatch(withdraw(balanceAmountInput));
	};

	return (
		<div>
			<Navigation />
			<h1>Your account balance: {balance}</h1>
			<hr />
			<input
				type="number"
				value={balanceAmountInput}
				onChange={handleBalanceInputChange}
			></input>
			<button
				onClick={handleDepositBalance}
				className="mx-2 rounded border border-black px-2"
			>
				Deposit
			</button>
			<button
				onClick={handleWithdrawBalance}
				className="mx-2 rounded border border-black px-2"
			>
				Withdraw
			</button>
			<hr />
		</div>
	);
};

export default Root;

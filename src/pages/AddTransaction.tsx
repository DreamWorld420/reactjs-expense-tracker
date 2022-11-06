import React from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@App/hooks";
import { add } from "@Features/transactions/TransactionsSlice";
import { withdraw, deposit } from "@Features/balance/balanceSlice";
import Transaction from "@Types/Transaction.interface";
import TransactionType from "@/types/TransactionType.enum";
import { $enum } from "ts-enum-util";
import { capitalize } from "lodash";
import SectionTitle from "@Components/shared/SectionTitle";

const $TransactionType = $enum(TransactionType);

const AddTransaction: React.FC = () => {
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Transaction>({
		mode: "onChange",
	});

	const onSubmit = handleSubmit((data) => {
		const type = Number(data.type);
		dispatch(add({ ...data, date: new Date().getTime() }));
		if (type === 1) {
			dispatch(withdraw(data.value));
		} else if (type === 0) {
			dispatch(deposit(data.value));
		}
		reset();
	});

	return (
		<div className="flex grow flex-col justify-center px-8">
			<SectionTitle className="mb-2">Add Transaction</SectionTitle>
			<form
				onSubmit={onSubmit}
				className="flex w-full flex-col gap-y-4 rounded bg-white p-4 font-robotoMono drop-shadow-2xl"
			>
				<label className="space-y-1">
					<p
						style={{
							color: errors.name ? "rgb(248 113 113)" : undefined,
						}}
						className="text-sm"
					>
						Name
					</p>
					<input
						{...register("name", {
							required: true,
						})}
						className="h-8 w-full rounded border border-black px-4 focus:border-transparent"
						style={{
							borderColor: errors.name
								? "rgb(248 113 113)"
								: undefined,
						}}
					/>
					{errors.name?.type === "required" ? (
						<p role="alert" className="text-xs text-red-400">
							Name is required!
						</p>
					) : (
						<p className="text-xs">Transaction name</p>
					)}
				</label>
				<label className="space-y-1">
					<p
						style={{
							color: errors.value
								? "rgb(248 113 113)"
								: undefined,
						}}
						className="text-sm"
					>
						Amount
					</p>
					<input
						{...register("value", {
							required: true,
							valueAsNumber: true,
							validate: (v) => {
								return !isNaN(v);
							},
						})}
						className="h-8 w-full rounded border border-black px-4 focus:border-transparent"
						style={{
							borderColor: errors.value
								? "rgb(248 113 113)"
								: undefined,
						}}
					/>
					{errors.value?.type === "required" && (
						<p role="alert" className="text-xs text-red-400">
							Amount is required!
						</p>
					)}
					{errors.value?.type === "validate" && (
						<p role="alert" className="text-xs text-red-400">
							Amount must be a number!
						</p>
					)}
					{!errors.value && (
						<p className="text-xs">Transaction amount</p>
					)}
				</label>
				<label className="space-y-1">
					<p className="text-sm">Type</p>
					<select
						{...register("type", {
							required: true,
						})}
						className="h-8 w-full rounded border border-black text-xs focus:border-transparent"
					>
						{$TransactionType.getKeys().map((key) => {
							return (
								<option
									key={key}
									value={Number(
										$TransactionType.getValueOrThrow(key)
									)}
								>
									{capitalize(key)}
								</option>
							);
						})}
					</select>
					<p className="text-xs">Transaction type</p>
				</label>

				<label className="space-y-1">
					<p className="text-sm">Description</p>
					<textarea
						rows={3}
						{...register("description")}
						className="w-full resize-none rounded border border-black focus:border-transparent"
					/>
				</label>
				<button
					type="submit"
					className="rounded bg-black px-4 py-2 uppercase tracking-wider text-white drop-shadow-2xl"
				>
					Add
				</button>
			</form>
		</div>
	);
};

export default AddTransaction;

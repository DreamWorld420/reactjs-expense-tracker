import React from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "app/hooks";
import { add } from "features/transactions/TransactionsSlice";
import { Transaction } from "types";

const AddTransaction: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Transaction>();
	const dispatch = useAppDispatch();

	const onSubmit = handleSubmit((data) => {
		dispatch(add(data));
	});

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					{...register("name", {
						required: true,
					})}
				/>
				<input
					{...register("value", {
						required: true,
						valueAsNumber: true,
					})}
				/>
				<textarea {...register("description")} />
				<button type="submit">Add</button>
			</form>
		</div>
	);
};

export default AddTransaction;

import TransactionType from "@Types/TransactionType.enum";

interface Transaction {
	type: TransactionType;
	value: number;
	name: string;
	description?: string;
	date: number;
}

export default Transaction;

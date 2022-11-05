import TransactionType from "./TransactionType.enum";

interface Transaction {
	type: TransactionType;
	value: number;
	name: string;
	description: string;
}

export default Transaction;

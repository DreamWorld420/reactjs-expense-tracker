import React from "react";

import SectionTitle from "@Components/shared/SectionTitle";
import TransactionList from "@Components/transactions/TransactionList";

const HomeTransactionList: React.FC = () => {
	return (
		<section className="mt-4 mb-12 flex grow flex-col">
			<SectionTitle className="mb-2">Last Ten transactions</SectionTitle>
			<TransactionList />
		</section>
	);
};

export default HomeTransactionList;

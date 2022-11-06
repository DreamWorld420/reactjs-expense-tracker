import { createBrowserRouter } from "react-router-dom";

import AddTransaction from "@Pages/AddTransaction";
import Chart from "@Pages/Chart";
import Home from "@Pages/Home";
import Root from "@Pages/Root";
import Settings from "@Pages/Settings";
import Wallet from "@Pages/Wallet";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "wallet",
				element: <Wallet />,
			},
			{
				path: "chart",
				element: <Chart />,
			},
			{
				path: "settings",
				element: <Settings />,
			},
			{
				path: "add",
				element: <AddTransaction />,
			},
		],
	},
]);

export default router;

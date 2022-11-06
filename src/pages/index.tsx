import { createBrowserRouter } from "react-router-dom";
import AddTransaction from "./AddTransaction";
import Chart from "./Chart";
import Home from "./Home";
import Root from "./Root";
import Settings from "./Settings";
import Wallet from "./Wallet";

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

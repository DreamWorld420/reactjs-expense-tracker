import { createBrowserRouter } from "react-router-dom";
import Chart from "./pages/Chart";
import Root from "./pages/Root";
import Settings from "./pages/Settings";
import Wallet from "./pages/Wallet";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
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
		],
	},
]);

export default router;

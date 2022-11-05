import { createBrowserRouter } from "react-router-dom";
import Chart from "./pages/Chart";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Settings from "./pages/Settings";
import Wallet from "./pages/Wallet";

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
		],
	},
]);

export default router;

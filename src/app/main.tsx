import Header from '../widgets/Header';
import EnimalsPage from '../pages/EnimalsPage/EnimalsPage';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';
import './global.css';
import FavoriteEnimalsPage from '../pages/FavoriteEnimalsPage/FavoriteEnimalsPage';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Header />,
		children: [
			{
				path: '/',
				element: <EnimalsPage />,
			},
			{
				path: '/favorite-enimals',
				element: <FavoriteEnimalsPage />,
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);

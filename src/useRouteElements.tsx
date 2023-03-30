import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import Product from './pages/Product'
import Category from './pages/Category'
import User from './pages/User'

function useRouteElements() {
	const routeElements = useRoutes([
		{
			path: '',
			element: (
				<MainLayout>
					<Home />
				</MainLayout>
			)
		},
		{
			path: '/product',
			element: (
				<MainLayout>
					<Product />
				</MainLayout>
			)
		},
		{
			path: '/category',
			element: (
				<MainLayout>
					<Category />
				</MainLayout>
			)
		},
		{
			path: '/user',
			element: (
				<MainLayout>
					<User />
				</MainLayout>
			)
		}
	])
	return routeElements
}

export default useRouteElements

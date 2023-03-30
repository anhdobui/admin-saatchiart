import Breadcrumb from 'src/component/Breadcrumbs'
import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
type BodyType = {
	children?: ReactNode
}

function Body({ children }: BodyType) {
	const location = useLocation()
	const pathParts = location.pathname.split('/').filter((item) => item != '')
	const breadcrumbItems = pathParts.map((item, index) => {
		let result: { label: string; link?: string } = {
			label: item.charAt(0).toUpperCase() + item.slice(1)
		}
		result = index === pathParts.length - 1 ? { ...result } : { ...result, link: `/${item}` }
		return result
	})
	breadcrumbItems.unshift({
		label: 'Home',
		link: ''
	})
	return (
		<div className="p-4 sm:ml-64">
			<div className="mt-14">
				<Breadcrumb items={breadcrumbItems} />
			</div>
			<div className="mt-5 rounded-lg border-2 border-dashed p-4 ">{children}</div>
		</div>
	)
}

export default Body

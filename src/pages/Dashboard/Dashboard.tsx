import React from 'react'

import { PageSkeleton } from '@/components/organisms'

import { StatusFilter } from '@/components/molecules'

const Dashboard = () => {
	const handleChange = () => {}
	return (
		<div>
			<PageSkeleton
				filters={<StatusFilter statusNames={['a', 'b']} onChange={handleChange} />}
			></PageSkeleton>
		</div>
	)
}

export default Dashboard

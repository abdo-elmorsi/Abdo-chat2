import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function Loading() {
	return (
		<div className="h2 text-center my-5">
			<Spinner animation="grow" />
			<Spinner animation="grow" />
			<Spinner animation="grow" />
		</div>
	)
}

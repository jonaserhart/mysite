import * as React from 'react';
import { CircularProgress } from '@material-ui/core';
import '../styles/Center.scss';

export default function Loading() {
	return (
		<div className="center">
			<CircularProgress />
		</div>
	);
}
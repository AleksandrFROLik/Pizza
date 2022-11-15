import React from 'react';
import styles from './NotFoundBlock.module.scss'
export const NotFoundBlock = () => {
	return (
		<div className={styles.main}>
			<h1>
				<span className={styles.icon}>😕</span>
				<br />
				Not found
			</h1>
			<p className={styles.description}>Sorry, this page is not available in our online store.</p>
		</div>
	);
};

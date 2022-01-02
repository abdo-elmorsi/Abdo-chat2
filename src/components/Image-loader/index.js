import './style.css'
import React, { useState } from 'react'
import { Spinner, Image } from 'react-bootstrap'

const ImageLoader = ({ src, alt, style, className, width, height }) => {
	const loadedImages = {};
	const [loaded, setLoaded] = useState(loadedImages[src]);

	const onLoad = () => {
		loadedImages[src] = true;
		setLoaded(true);
	}

	return (
		<>
			{!loaded && (
				<div
					style={{ width: width, height: height, ...style }}
					className='d-flex justify-content-center align-items-center'>
					<Spinner animation="border" size="sm" />
				</div>
			)}
			<Image
				onLoad={onLoad}
				alt={alt || ''}
				className={`${className || ''} ${loaded ? 'is-img-loaded' : 'is-img-loading'}`}
				src={src}
				width={width}
				height={height}
				style={style}
			/>
		</>
	)
}

export default ImageLoader
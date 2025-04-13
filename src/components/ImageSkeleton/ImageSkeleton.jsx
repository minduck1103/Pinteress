import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import './ImageSkeleton.css'
const ImageSkeleton = (props) => {
    return (

        Array(props.cards)
            .fill(0)
            .map((_, i) => (
                <div style={{ width: '30%' }}>
                    <SkeletonTheme baseColor="#fff" highlightColor="#cfcfcf">
                        <Skeleton
                            width="100%"
                            height={500}
                        />
                    </SkeletonTheme>
                </div >
            ))

    );
}

export default ImageSkeleton

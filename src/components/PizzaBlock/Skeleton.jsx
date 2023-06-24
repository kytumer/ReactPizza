

import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={280}
        height={470}
        viewBox="0 0 280 470"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="128" cy="100" r="98" />
        <rect x="0" y="207" rx="0" ry="0" width="280" height="27" />
        <rect x="0" y="247" rx="0" ry="0" width="280" height="88" />
        <rect x="7" y="355" rx="0" ry="0" width="41" height="27" />
        <rect x="123" y="346" rx="0" ry="0" width="152" height="45" />
    </ContentLoader>
)

export default Skeleton
import Script from 'next/script'

const Analytics = () => (
    <Script
        defer
        data-domain="butwal.hackclub.com"
        src="https://plausible.io/js/script.pageview-props.tagged-events.js"
    />
)

export default Analytics

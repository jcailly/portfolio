/** @type {import('next').NextConfig} */
export default {
    experimental: {
        optimizeCss: true,  // ← inlines critical CSS, defers the rest
    },
}



/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
})

module.exports = withPWA({
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com'],
    },
    env: {
        API_URL: process.env.API_URL
    }
})
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  [require('tailwindcss')({
    config: './tailwind.config.ts'
  })]
], nextConfig)

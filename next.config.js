/** @type {import('next').NextConfig} */
const path = require('path');

const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['jsx', 'js', 'tsx', 'ts'],
  swcMinify: false,
  i18n,
};

module.exports = nextConfig;

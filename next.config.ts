import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/ko.json',
  },
});

const nextConfig: NextConfig = {
  compiler: {
		emotion: true,
	},
};

export default withNextIntl(nextConfig);

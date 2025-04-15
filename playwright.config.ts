/* eslint-disable import/no-extraneous-dependencies */
import { PlaywrightTestConfig, devices } from '@playwright/test';
import path from 'path';

const PORT = process.env.PORT || 8080;
const baseURL = `http://localhost:${PORT}`;

const config: PlaywrightTestConfig = {
  timeout: 5 * 1000,
  testDir: path.join(__dirname, 'tests'),
  retries: 0,
  webServer: {
    command: 'yarn prod',
    url: baseURL,
    timeout: 120 * 1000,
    reuseExistingServer: true,
  },
  // globalSetup: './e2e/config/globalSetup.ts',
  use: {
    baseURL,
    // storageState: './e2e/config/storageState.json',
  },
  reporter: [['html', { open: 'always' }]],
  projects: [
    {
      name: 'dayoff-front',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
};

export default config;

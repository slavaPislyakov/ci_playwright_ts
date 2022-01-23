import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  retries: 0,
  reporter: "line",
  use: {
    baseURL: "https://www.google.com",
    headless: false,
    video: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  workers: 2,
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
};
export default config;

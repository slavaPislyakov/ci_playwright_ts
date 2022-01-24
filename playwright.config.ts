import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  retries: 0,
  reporter: "line",
  use: {
    baseURL: "https://www.google.com",
    headless: false,
    video: "retain-on-failure",
    screenshot: "only-on-failure",
    launchOptions: {
      args: [
        "--whitelisted-ips=",
        "--disable-infobars=true", // note this does not remove "Chrome is being controlled by automated test software" notification
        "--disable-gpu",
        "window-size=1920,1080",
        "test-type=browser",
        "disable-notifications",
        "incognito",
        "disable-application-cache",
        "-disable-extensions", // used to bypass loading of extensions which will be blocked by MMC security policy anyway
        "--ignore-certificate-errors",
        "enable-automation",
        "--disable-dev-shm-usage",
        "--disable-browser-side-navigation",
        "--no-sandbox",
        "--headless",
        "--remote-debugging-port=9222",
        "--disable-extensions",
      ],
    },
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

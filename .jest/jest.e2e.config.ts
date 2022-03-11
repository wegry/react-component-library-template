import config from "./jest.config"

export default {
  ...config,
  // testEnvironment: undefined,
  preset: "jest-puppeteer",
  testRegex: [".e2e.spec.[tj]sx?$"],
  testPathIgnorePatterns: config.testPathIgnorePatterns.filter((pattern) => pattern !== "*.e2e.spec.[tj]sx?$"),
  setupFilesAfterEnv: config.setupFilesAfterEnv.concat("<rootDir>/.jest/e2e.setup.ts")
}

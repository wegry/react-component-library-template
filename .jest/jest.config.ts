export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
    "^.+\\.stories\\.[tj]sx?$": "@storybook/addon-storyshots/injectFileName",
  },
  rootDir: "../",
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "resources"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', "<rootDir>/.jest/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
};

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  automock: false,
  transform: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/index.{js,ts,tsx}', "!/node_modules/", '!src/wdyr.ts'],
  setupFilesAfterEnv: ['./jest.setup.ts', '@testing-library/jest-dom/extend-expect'],
}

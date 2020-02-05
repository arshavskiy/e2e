module.exports = {
    preset: "jest-puppeteer",
    globals: {
      URL: "https://www.thestartmagazine.com/feed/summary"
    },
    testMatch: [
      "**/test/**/*.test.js"
    ],
    verbose: true
}
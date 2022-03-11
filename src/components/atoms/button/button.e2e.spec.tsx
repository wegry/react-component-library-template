import 'expect-puppeteer'

describe("button e2e", () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000')
  })

  it('should display "storybook" text on page', async () => {
    await expect(page).toMatch('Google')
  })
})

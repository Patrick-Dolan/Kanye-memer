import getLongestWord from "../src/js/searchQuote";

describe("getLongestWord", () => {
  test("getLongestWord", () => {
    let quote = "My first pillar when I'm on the board of adidas will be an adidas Nike collaboration to support community growth";
    expect(getLongestWord(quote)).toMatch("collaboration");
  });
});
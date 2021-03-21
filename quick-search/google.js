/**
 * @file Google Quick Search
 *
 * This script will jump to the first google search result
 *
 * It will:
 *   - Check if the search param `q` is present
 *   - Check if it starts with `!`
 *   - Search for the first `a` tag n the `#search` node that has a href set
 *   - Click on it
 */

const query = new URL(location.href).searchParams.get("q")

if (query?.[0] == '!') {
  document
    .evaluate(
      './/a[@href]',
      window.search,
      null,
      XPathResult.ORDERED_NODE_ITERATOR_TYPE,
      null)
    .iterateNext()
    ?.click()
}

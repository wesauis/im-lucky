const query = new URL(location.href).searchParams.get("q")

if (query?.[0] == '!') {
  document
    .evaluate(
      './/a[@href]',
      window.b_results,
      null,
      XPathResult.ORDERED_NODE_ITERATOR_TYPE,
      null)
    .iterateNext()
    ?.click()
}

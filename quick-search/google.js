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

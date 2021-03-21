const query = new URL(location.href).searchParams.get("q")

if (query?.startsWith('!!')) {
  document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') {
      clickOnFirst()
    }
  });
}

function clickOnFirst() {
  document
    .evaluate(
      './/a[@href]',
      window.links,
      null,
      XPathResult.ORDERED_NODE_ITERATOR_TYPE,
      null)
    .iterateNext()
    ?.click()
}
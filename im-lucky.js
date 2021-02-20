const url = new URL(location.href);

if (
  url.host == "www.google.com" &&
  url.searchParams.get("q")?.startsWith("!") &&
  history.length <= 2
) {
  document.querySelector(".tF2Cxc a").click();
}

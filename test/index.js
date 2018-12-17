import('../pkg/outline_js').then(async outline => {
  const index = await fetch('./index.html');
  const content = await index.text();
  try {
    const tangled = new outline.HtmlParser().tangle(content);
    eval(tangled);
  } catch(error) {
    console.error(error);
  }
});

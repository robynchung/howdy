export const refineHightlight = (txt: string) => {
  const replaced = txt
    .replace(/^\[/g, `<span class="highlight">`)
    .replace(/\]$/g, `</span>`);

  return replaced;
};

export const refineHightlight = (txt: string) => {
  const replaced = txt
    .replace(/\[/g, `<span class="highlight">`)
    .replace(/\]/g, `</span>`);

  return replaced;
};

export const getExpNum = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const startYear = 2019;

  return currentYear - startYear;
};

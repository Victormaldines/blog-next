export const removeHtml = (html: string): string => {
  let data = html.replace(/&lt;.*&gt/gi, ''); // <*>
  data = data.replace(/&lt;\/.*&gt/gi, ''); // </*>
  data = data.replace(/<[^>]*>/gi, ''); // < [tudo que não for >] >
  data = data.replace(/<\/[^>]*>/gi, ''); // </ [tudo que não for >] >

  return data;
};

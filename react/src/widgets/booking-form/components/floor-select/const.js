export const data = Array.from({ length: 25 }, (_, i) => {
  return { value: i + 3, title: `Этаж ${i + 3}` };
});

export const controlName = 'floor';

export const defaultValue = data[0].value;

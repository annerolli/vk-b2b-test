export const data = Array.from({ length: 10 }, (_, i) => {
  return { value: i + 1, title: `Переговрная ${i + 1}` };
});

export const controlName = 'room';

export const defaultValue = data[0].value;

import { NativeSelect } from '@vkontakte/vkui';

export const Select = ({ data, ...props }) => (
  <NativeSelect {...props}>
    {data.map(({ value, title }, index) => (
      <option key={`${value}_${index}`} value={value}>
        {title}
      </option>
    ))}
  </NativeSelect>
);

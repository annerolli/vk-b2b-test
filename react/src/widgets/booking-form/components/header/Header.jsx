import { FormItem, Title } from '@vkontakte/vkui';
import { memo } from 'react';

const Component = () => (
  <FormItem>
    <Title level="2" weight="2">
      Бронирование переговорной
    </Title>
  </FormItem>
);

export const Header = memo(Component);

import { ButtonGroup, FormItem } from '@vkontakte/vkui';
import { SubmitButton } from '../submit-button';
import { ResetButton } from '../reset-button';
import { memo } from 'react';

const Component = () => (
  <FormItem>
    <ButtonGroup>
      <SubmitButton />
      <ResetButton />
    </ButtonGroup>
  </FormItem>
);

export const Actions = memo(Component);

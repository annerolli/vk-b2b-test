import { FormProvider } from './Context';
import { Form } from './Form';

export const Root = () => (
  <FormProvider>
    <Form />
  </FormProvider>
);

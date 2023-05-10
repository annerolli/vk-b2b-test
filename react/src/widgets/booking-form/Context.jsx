import { createContext, useContext, useState } from 'react';
import { towerControlName, towerDefaultValue } from './components/tower-select';
import { floorControlName, floorDefaultValue } from './components/floor-select';
import { roomControlName, roomDefaultValue } from './components/room-select';
import { dateControlName } from './components/date-picker';
import { commentControlName, commentDefaultValue } from './components/comment';

const defaultState = {
  [towerControlName]: towerDefaultValue,
  [floorControlName]: floorDefaultValue,
  [roomControlName]: roomDefaultValue,
  [dateControlName]: new Date(),
  [commentControlName]: commentDefaultValue,
};

const defaultValue = {
  state: defaultState,
  setState: () => {},
};

export const FormContext = createContext(defaultValue);

export const FormProvider = ({ children }) => {
  const [state, setState] = useState(defaultValue.state);

  return (
    <FormContext.Provider value={{ state, setState }}>
      {children}
    </FormContext.Provider>
  );
};

/**
 * Возвращает текущение состояние поля и функцию для его изменения
 * @param {string} fieldName
 */
export function useFieldState(fieldName) {
  const { state, setState } = useContext(FormContext);

  const fieldState = state[fieldName];
  const setFieldState = (value) =>
    setState((state) => ({ ...state, [fieldName]: value }));

  return [fieldState, setFieldState];
}

/**
 * Возвращает функцию для сброса состояние формы
 */
export function useFormReset() {
  const { setState } = useContext(FormContext);

  return () => setState(defaultState);
}

/**
 * Возвращает состояние формы
 */
export function useFormState() {
  const { state } = useContext(FormContext);

  return state;
}

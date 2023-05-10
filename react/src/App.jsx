import '@vkontakte/vkui/dist/vkui.css';
import { BookingForm } from './widgets/booking-form';
import s from './App.module.css';

export const App = () => (
  <div className={s.App}>
    <BookingForm />
  </div>
);

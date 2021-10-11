import MainHeader from './main-header';
import Notification from '../ui/notification';
import NotificationContext from '../../store/notification-context';
import { useContext } from 'react';

export default function Layout(props) {
  const notificationctx = useContext(NotificationContext);

  const activeNotification = notificationctx.notification;

  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification?.title}
          message={activeNotification?.message}
          status={activeNotification?.status}
        />
      )}
    </>
  );
}

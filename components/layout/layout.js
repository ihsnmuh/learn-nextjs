import MainHeader from './main-header';
import Notification from '../ui/notification';
import NotificationContext from '../../store/notification-context';

export default function Layout(props) {
  const notificationctx = useContext(NotificationContext);

  const activeNotification = notificationctx.notification;

  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
      <Notification
        title={activeNotification.title}
        message={activeNotification.message}
        status={activeNotification.status}
      />
    </>
  );
}

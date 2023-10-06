
import { useLogOutRedirect } from 'hooks/useLogOutRedirect';

export const DashboardPage = () => {
  useLogOutRedirect();
  return <div>DashboardPage</div>;
};

export default DashboardPage;

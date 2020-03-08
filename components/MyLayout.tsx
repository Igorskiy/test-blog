import Header from './Header';
import { PropsWithChildren } from 'react';

const Layout: React.FC = ({ children }: PropsWithChildren<{}>) => (
  <div>
    <Header />
    {children}
  </div>
);

export default Layout;

import { ReactNode } from 'react';
import { FloatButton } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
      <FloatButton.BackTop icon={<UpOutlined />} />
    </div>
  );
};

export default Layout;

import { GithubOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <GithubOutlined />, href: 'https://github.com', label: 'GitHub' },
    { icon: <LinkedinOutlined />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <MailOutlined />, href: 'mailto:khanmohdumair752@gmail.com', label: 'Email' },
    { icon: <PhoneOutlined />, href: 'tel:+919792098768', label: 'Phone' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                type="text"
                icon={link.icon}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                size="large"
              />
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
            © {currentYear} Mohammad Umair. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Card, Form, Input, Button, message } from 'antd';
import { EnvironmentOutlined, MailOutlined, PhoneOutlined, GithubOutlined, LinkedinOutlined, DownloadOutlined } from '@ant-design/icons';
import { Send } from 'lucide-react';

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form values:', values);
    message.success('Message sent successfully! I will get back to you soon.');
    form.resetFields();
  };

  const contactInfo = [
    {
      icon: <EnvironmentOutlined className="text-2xl" />,
      title: 'Location',
      value: 'Sakinaka, Mumbai, India',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <MailOutlined className="text-2xl" />,
      title: 'Email',
      value: 'khanmohdumair752@gmail.com',
      link: 'mailto:khanmohdumair752@gmail.com',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <PhoneOutlined className="text-2xl" />,
      title: 'Phone',
      value: '+91 9792098768',
      link: 'tel:+919792098768',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const socialLinks = [
    { icon: <GithubOutlined />, label: 'GitHub', href: 'https://github.com', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: <LinkedinOutlined />, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-blue-600' },
    { icon: <MailOutlined />, label: 'Email', href: 'mailto:khanmohdumair752@gmail.com', color: 'hover:text-red-500' },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm interested in AI/ML opportunities where I can contribute, learn, and grow.
            Feel free to reach out if you have any questions or want to work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info) => (
            <Card
              key={info.title}
              className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${info.gradient} flex items-center justify-center text-white mb-4`}>
                {info.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{info.title}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
              )}
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Connect With Me</h2>

            <div className="space-y-6 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 ${link.color} transition-all hover:scale-105`}
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span className="font-semibold">{link.label}</span>
                </a>
              ))}
            </div>

            <Button
              type="primary"
              size="large"
              icon={<DownloadOutlined />}
              block
              className="bg-gradient-to-r from-blue-500 to-cyan-500 border-0"
            >
              Download Resume
            </Button>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Me a Message</h2>
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Form.Item
                name="name"
                label={<span className="text-gray-700 dark:text-gray-300">Your Name</span>}
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input size="large" placeholder="John Doe" />
              </Form.Item>

              <Form.Item
                name="email"
                label={<span className="text-gray-700 dark:text-gray-300">Your Email</span>}
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' },
                ]}
              >
                <Input size="large" placeholder="john@example.com" />
              </Form.Item>

              <Form.Item
                name="subject"
                label={<span className="text-gray-700 dark:text-gray-300">Subject</span>}
                rules={[{ required: true, message: 'Please enter a subject' }]}
              >
                <Input size="large" placeholder="Project Collaboration" />
              </Form.Item>

              <Form.Item
                name="message"
                label={<span className="text-gray-700 dark:text-gray-300">Your Message</span>}
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <Input.TextArea rows={5} placeholder="Tell me about your project..." />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  icon={<Send className="w-4 h-4" />}
                  block
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 border-0"
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;

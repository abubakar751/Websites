import { 
  Smartphone, 
  Monitor, 
  TouchpadOff, 
  RotateCcw, 
  Battery, 
  Droplets, 
  Settings, 
  Camera, 
  Volume2, 
  Power 
} from 'lucide-react';

export const services = [
  {
    id: 'smartphone-repair',
    title: 'Smartphone & iPhone Repair',
    description: 'Expert repair services for all smartphones and iPhones with genuine parts and professional expertise.',
    icon: Smartphone,
    image: 'https://www.kimstore.com/cdn/shop/articles/S24_Ultra_Banner.png?v=1705634996',
    features: [
      'All smartphone brands supported',
      'Genuine and compatible parts',
      'Professional diagnosis',
      'Warranty included'
    ]
  },
  {
    id: 'hardware-software',
    title: 'Hardware & Software Repair',
    description: 'Comprehensive hardware and software repair services for all devices with advanced diagnostic tools.',
    icon: Settings,
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    features: [
      'Hardware component replacement',
      'Software troubleshooting',
      'System optimization',
      'Data recovery assistance'
    ]
  },
  {
    id: 'lcd-touch-repair',
    title: 'LCD & Touch Screen Repair',
    description: 'Repair broken LCDs and touchscreens with high-quality replacements and precision installation.',
    icon: TouchpadOff,
    image: 'https://electronicsrepair.co.nz/wp-content/uploads/2020/06/Samsung-phone-repair.jpg',
    features: [
      'LCD replacement',
      'Touch sensitivity restoration',
      'Screen calibration',
      'Quality testing'
    ]
  },
  {
    id: 'screen-replacement',
    title: 'Screen Replacement',
    description: 'Fix cracked or broken screens with premium quality replacements and professional installation.',
    icon: Monitor,
    image: 'https://images.pexels.com/photos/1482061/pexels-photo-1482061.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    features: [
      'Tempered glass screens',
      'Color accuracy guaranteed',
      'Perfect fit installation',
      'Screen protection tips'
    ]
  },
  {
    id: 'battery-replacement',
    title: 'Battery Replacement',
    description: 'Replace old batteries for improved performance and longer battery life with certified batteries.',
    icon: Battery,
    image: 'https://cdn.mos.cms.futurecdn.net/thZoYL33WnAUEycEgVPXsP-320-80.jpg',
    features: [
      'High-capacity batteries',
      'Extended battery life',
      'Quick charging support',
      'Battery health optimization'
    ]
  },
  {
    id: 'water-damage',
    title: 'Water Damage Repair',
    description: 'Rescue water-damaged phones with expert solutions and specialized drying techniques.',
    icon: Droplets,
    image: 'https://www.mobile-experts.com.au/wp-content/uploads/2020/12/phone-water-damage.jpg',
    features: [
      'Emergency water damage service',
      'Component cleaning',
      'Corrosion removal',
      'Data recovery attempt'
    ]
  },
  {
    id: 'software-fix',
    title: 'Software Fix',
    description: 'Resolve lagging, crashing, and update issues effectively with professional software solutions.',
    icon: RotateCcw,
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    features: [
      'OS reinstallation',
      'App optimization',
      'Performance tuning',
      'Security updates'
    ]
  },
  {
    id: 'camera-repair',
    title: 'Camera Repair',
    description: 'Fix blurry or non-functional cameras for sharp photos with precision lens replacement.',
    icon: Camera,
    image: 'https://phonechat.com.au/wp-content/uploads/2024/12/Mobile-Phone-Camera-Repairs-and-Replacement-img-1024x682.jpg',
    features: [
      'Front and rear camera',
      'Focus mechanism repair',
      'Image quality restoration',
      'Camera calibration'
    ]
  },
  {
    id: 'speaker-repair',
    title: 'Speaker Repair',
    description: 'Restore sound quality with our speaker repair services for crystal clear audio experience.',
    icon: Volume2,
    image: 'https://vgphones.com.au/wp-content/uploads/2022/12/iphone-loud-speaker-repair.webp',
    features: [
      'Speaker replacement',
      'Audio quality testing',
      'Volume optimization',
      'Microphone repair'
    ]
  },
  {
    id: 'button-replacement',
    title: 'Button Replacement',
    description: 'Fix non-working power, volume, or home buttons with precise replacement and calibration.',
    icon: Power,
    image: 'https://images.wootechy.com/article/iphone-volume-buttons-not-working.jpg',
    features: [
      'Power button repair',
      'Volume button fix',
      'Home button replacement',
      'Button responsiveness testing'
    ]
  }
];
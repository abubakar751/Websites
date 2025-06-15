import { ServiceType, TestimonialType, GalleryItemType } from '../types';

export const SERVICES: ServiceType[] = [
  {
    id: 1,
    title: 'Furniture Repair',
    description: 'Expert repair services for all types of wooden furniture, including chairs, tables, beds, and cabinets.',
    icon: 'tool',
  },
  {
    id: 2,
    title: 'Custom Manufacturing',
    description: 'Bespoke furniture manufacturing tailored to your specific requirements and design preferences.',
    icon: 'hammer',
  },
  {
    id: 3,
    title: 'Restoration',
    description: 'Bring antique and valuable furniture back to life with our professional restoration services.',
    icon: 'paintbrush',
  },
  {
    id: 4,
    title: 'Wood Polishing',
    description: 'Professional polishing services to enhance the beauty and longevity of your wooden furniture.',
    icon: 'spray',
  },
];

export const TESTIMONIALS: TestimonialType[] = [
  {
    id: 1,
    name: 'Ahmad Asad',
    location: 'Andheri, Mumbai',
    text: 'Rahman Furniture restored my antique dining table to perfection. Their craftsmanship is exceptional, and the attention to detail is impressive.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Nuashad Ahmad',
    location: 'Bandra, Mumbai',
    text: 'I had a custom bed frame made for my apartment. The quality of work and timely delivery exceeded my expectations. Highly recommended!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Abu Bakar',
    location: 'Powai, Mumbai',
    text: 'They repaired several pieces of furniture in my home that I thought were beyond saving. Professional service and reasonable pricing.',
    rating: 4,
  },
];

export const GALLERY_ITEMS: GalleryItemType[] = [
  {
    id: 1,
    title: 'Antique Chair Restoration',
    description: 'Complete restoration of a 50-year-old teak wood chair',
    imageUrl: 'https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'repair',
  },
  {
    id: 2,
    title: 'Custom Dining Table',
    description: 'Handcrafted dining table made from premium hardwood',
    imageUrl: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'manufacturing',
  },
  {
    id: 3,
    title: 'Modern Bookshelf',
    description: 'Contemporary bookshelf with adjustable shelving',
    imageUrl: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'manufacturing',
  },
  {
    id: 4,
    title: 'Office Chair Repair',
    description: 'Structural and upholstery repair of an executive office chair',
    imageUrl: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'repair',
  },
  {
    id: 5,
    title: 'Custom Wardrobe',
    description: 'Built-in wardrobe with custom compartments and finish',
    imageUrl: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'custom',
  },
  {
    id: 6,
    title: 'Wooden Bed Frame',
    description: 'Handcrafted king-size bed frame with storage',
    imageUrl: 'https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'manufacturing',
  },
];
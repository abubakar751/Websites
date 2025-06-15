export type ServiceType = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export type TestimonialType = {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
};

export type GalleryItemType = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'repair' | 'manufacturing' | 'custom';
};
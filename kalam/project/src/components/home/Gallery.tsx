import React, { useState } from 'react';
import Section from '../ui/Section';
import { GALLERY_ITEMS } from '../../utils/constants';
import { GalleryItemType } from '../../types';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredItems = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);
    
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'repair', label: 'Repair' },
    { id: 'manufacturing', label: 'Manufacturing' },
    { id: 'custom', label: 'Custom' },
  ];

  return (
    <Section 
      id="gallery" 
      title="Our Gallery" 
      subtitle="Explore our craftsmanship through our completed projects"
    >
      <div className="flex flex-wrap justify-center mb-10 gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`px-4 py-2 rounded-full transition-colors ${
              filter === category.id
                ? 'bg-amber-800 text-white'
                : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </div>
    </Section>
  );
};

const GalleryItem: React.FC<{ item: GalleryItemType }> = ({ item }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <div className="aspect-[4/3] bg-amber-100">
        <img 
          src={item.imageUrl} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-amber-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <div>
          <span className="inline-block px-3 py-1 bg-amber-700 text-white text-xs rounded-full mb-2 capitalize">
            {item.category}
          </span>
          <h3 className="text-xl font-bold text-white mb-1 font-serif">{item.title}</h3>
          <p className="text-amber-100 text-sm">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
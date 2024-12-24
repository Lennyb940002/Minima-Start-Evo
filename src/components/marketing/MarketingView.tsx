import React from 'react';
import { Platform } from './types';
import { PlatformCard } from './PlatformCard';

const platforms: Platform[] = [
  {
    id: '1',
    name: 'TikTok',
    frequency: '2 vidéos/semaine',
    icon: 'tiktok',
  },
  {
    id: '2',
    name: 'Instagram',
    frequency: '1 vidéo/semaine',
    icon: 'instagram',
  },
  {
    id: '3',
    name: 'YouTube',
    frequency: '1 vidéo/semaine',
    icon: 'youtube',
  },
  {
    id: '4',
    name: 'Facebook',
    frequency: '1 vidéo/semaine',
    icon: 'facebook',
  },
];

export function MarketingView() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Marketing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platforms.map((platform) => (
          <PlatformCard
            key={platform.id}
            platform={platform}
            onSelect={() => console.log('Selected platform:', platform.name)}
          />
        ))}
      </div>
    </div>
  );
}
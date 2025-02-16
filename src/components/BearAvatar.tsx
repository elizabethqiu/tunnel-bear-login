import { memo } from 'react';

interface BearAvatarProps {
  currentImage: string;
  size?: number;
}

const BearAvatar = memo(function BearAvatar({ currentImage, size = 130 }: BearAvatarProps) {
  return (
    <img 
      src={currentImage} 
      className="rounded-full absolute top-0 left-0 transition-opacity duration-100"
      style={{ 
        width: size,
        height: size,
        objectFit: 'contain'
      }}
      tabIndex={-1}
      alt="Animated bear avatar"
    />
  );
});

export default BearAvatar;

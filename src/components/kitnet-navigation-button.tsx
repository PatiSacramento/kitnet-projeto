'use client';

import Link from 'next/link';
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react';
import { usePathname } from 'next/navigation';

type NavigationButtonsProps = {
};

const allKits: Record<string, { name: string }> = {
  ['abadia-dos-dourados-1']: { name: 'Kitnet Abadia dos Dourados 1' },
  ['abadia-dos-dourados-2']: { name: 'Kitnet Abadia dos Dourados 2' },
  ['abadia-dos-dourados-3']: { name: 'Kitnet Abadia dos Dourados 3' },
  ['loft-rua-corinto']: { name: 'Loft Rua Corinto' },
};

export default function KitnetNavigationButton({}: NavigationButtonsProps) {
  const pathname = usePathname();
  const kitKey = pathname.split('/').filter(Boolean).slice(-1)[0];
  const kitKeys = Object.keys(allKits);
  const currentIndex = kitKeys.indexOf(kitKey);

  if (currentIndex === -1) return null; // Ensure the key exists

  const prevKitName = kitKeys[currentIndex - 1] || kitKeys[kitKeys.length - 1]; // Loop back if at start
  const nextKitName = kitKeys[currentIndex + 1] || kitKeys[0]; // Loop back if at end

  return (
    <div className="mt-32 px-4 lg:px-24 w-full grid grid-cols-2">
      <Link
        href={`/kitnets/${prevKitName}`}
        className="text-blue-600 underline hover:text-blue-800 gap-2 flex items-center"
      >
        <RiArrowLeftLine size={16} /> {allKits[prevKitName].name}
      </Link>
      <Link
        href={`/kitnets/${nextKitName}`}
        className="place-self-end text-blue-600 underline hover:text-blue-800 gap-2 flex items-center"
      >
        {allKits[nextKitName].name} <RiArrowRightLine size={16} />
      </Link>
    </div>
  );
}

'use client';

import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react';
import Link from 'next/link';

type NavigationButtonsProps = {
  kitName: string;
  routeNames: string[];
};

export default function KitnetNavigationButton({ kitName, routeNames }: NavigationButtonsProps) {
  const currentIndex = routeNames.indexOf(kitName);
  const nextIndex = (currentIndex + 1) % routeNames.length;
  const prevIndex = (currentIndex - 1 + routeNames.length) % routeNames.length;

  const nextKitName = routeNames[nextIndex];
  const prevKitName = routeNames[prevIndex];

  return (
    <div className="mt-32 px-24 w-full flex justify-between">
      <Link
        href={`/kitnets/${nextKitName}`}
        className="text-blue-600 underline hover:text-blue-800 gap-2 flex items-center"
      >
        <RiArrowLeftLine size={16} /> {prevKitName.replace(/-/g, ' ')}
      </Link>
      <Link
        href={`/kitnets/${prevKitName}`}
        className="text-blue-600 underline hover:text-blue-800 gap-2 flex items-center"
      >
        {nextKitName.replace(/-/g, ' ')} <RiArrowRightLine size={16} />
      </Link>
    </div>
  );
}

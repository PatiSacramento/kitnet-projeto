import Link from 'next/link';
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react';

type NavigationButtonsProps = {
  kitKey: string;
  allKits: Record<string, { content: (args: any) => JSX.Element; name: string }>;
};

export default function KitnetNavigationButton({ kitKey, allKits }: NavigationButtonsProps) {
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

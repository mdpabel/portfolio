'use client';
import dynamic from 'next/dynamic';
import worldMill from '@react-jvectormap/world/worldMill.json';
import {
  getProjectsByCountryCode,
  totalProjects,
  worldDominaation,
} from './data';

const VectorMap = dynamic(
  // @ts-ignore
  () => import('@react-jvectormap/core').then((m) => m.VectorMap),
  { ssr: false },
);

const WorldDominance = () => {
  return (
    <div className='w-full h-52 md:h-96'>
      <h2 className='font-medium py-2'>
        World Dominaation {worldDominaation}%
      </h2>
      <VectorMap
        zoomOnScroll={false}
        map={worldMill}
        onRegionTipShow={(e, el, code) => {
          // @ts-ignore
          el.html(
            // @ts-ignore
            el.html() +
              ' (Completed Projects - ' +
              getProjectsByCountryCode(code) +
              ')',
          );
        }}
      />
    </div>
  );
};

export default WorldDominance;

import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const ProjectV2 = () => {
  const alignCenter = { display: 'flex', alignItems: 'center' };
  return (
    <div>
      <Parallax pages={3}>
        <ParallaxLayer className='' sticky={{ start: 1.3, end: 3 }}>
          <div className='flex pl-[135px]  h-[80vh] flex-col justify-between w-1/2 '>
            <h2 className='text-3xl font-medium text-gray-600'>01</h2>
            <div className='flex flex-col space-y-4 gap-y-4'>
              <h2 className='inline-block text-gray-600 font-bold text-2xl md:text-5xl tracking-[-1.25px] '>
                Real time vehicle tracking system
              </h2>
              <div className='space-y-2'>
                <h3 className='font-semibold text-gray-600'>
                  Full stack application
                </h3>
                <p className='text-base font-medium'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  vitae exercitationem nihil ratione molestias quia debitis
                  aspernatur error sequi harum.
                </p>
              </div>
            </div>

            <ul className='flex flex-wrap text-sm list-disc list-inside gap-x-4'>
              <li className=''>Nodejs/Express</li>
              <li className=''>Redis</li>
              <li className=''>React Native</li>
              <li className=''>IoT Senors</li>
              <li className=''>Socket.io</li>
              <li className=''>Firebase</li>
            </ul>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: 'flex-end' }}
        >
          <div>
            <p>Im not</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: 'flex-end' }}
        >
          <div>
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ProjectV2;

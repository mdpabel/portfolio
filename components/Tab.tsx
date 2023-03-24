import { useState, ChangeEvent } from 'react';

const Tab = () => {
  const [activeTab, setActiveTab] = useState('work');

  const handleTabChange = (event: ChangeEvent<HTMLInputElement>) => {
    setActiveTab(event.target.value);
  };

  return (
    <ul className='grid w-full grid-cols-2 p-1 shadow-lg rounded-3xl'>
      <li>
        <input
          type='radio'
          id='work'
          name='hosting'
          value='work'
          className='hidden peer'
          checked={activeTab === 'work'}
          onChange={handleTabChange}
          required
        />
        <label
          htmlFor='work'
          className={`inline-flex items-center justify-between w-full px-4 py-2 text-gray-500 cursor-pointer rounded-3xl peer-checked:bg-gray-100 hover:text-gray-600 transition-all duration-500 ${
            activeTab === 'work'
              ? 'peer-checked:text-gray-800 peer-checked:bg-white'
              : ''
          }`}
        >
          <div className='block'>Work</div>
        </label>
      </li>
      <li>
        <input
          type='radio'
          id='play'
          name='hosting'
          value='play'
          className='hidden peer'
          checked={activeTab === 'play'}
          onChange={handleTabChange}
        />
        <label
          htmlFor='play'
          className={`inline-flex items-center justify-between w-full px-4 py-2 text-gray-500 cursor-pointer rounded-3xl peer-checked:bg-gray-100 hover:text-gray-600 transition-all duration-500 ${
            activeTab === 'play'
              ? 'peer-checked:text-gray-800 peer-checked:bg-white'
              : ''
          }`}
        >
          <div className='block'>Play</div>
        </label>
      </li>
    </ul>
  );
};

export default Tab;

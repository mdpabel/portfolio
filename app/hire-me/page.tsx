'use client';

import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/Button';

const HireMe = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    fixHack: false,
    reactNode: false,
    hosting: false,
    maintenance: false,
    wordpress: false,
    blacklist: false,
    error: false,
    dns: false,
    headless: false,
    other: false,
  });

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setSelectedOptions((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  return (
    <div>
      <h2 className='py-4 font-medium text-2xl'>Project details</h2>
      <div>
        <h3 className='py-4 font-medium'>What can I help you with?</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
          <div className='flex items-center space-x-1'>
            <Input
              type='checkbox'
              id='fixHack'
              className='w-4 h-4'
              onChange={handleCheckboxChange}
            />
            <Label className='px-2' htmlFor='fixHack'>
              Malware removal & Fix hack
            </Label>
          </div>

          <div className='flex items-center space-x-1'>
            <Input
              type='checkbox'
              id='reactNode'
              className='w-4 h-4'
              onChange={handleCheckboxChange}
            />
            <Label className='px-2' htmlFor='reactNode'>
              Web Development (React, Nodejs)
            </Label>
          </div>

          <div className='flex items-center space-x-1'>
            <Input
              type='checkbox'
              id='hosting'
              className='w-4 h-4'
              onChange={handleCheckboxChange}
            />
            <Label className='px-2' htmlFor='hosting'>
              VPS Server Administration
            </Label>
          </div>

          <div className='flex items-center space-x-1'>
            <Input
              type='checkbox'
              id='headless'
              className='w-4 h-4'
              onChange={handleCheckboxChange}
            />
            <Label className='px-2' htmlFor='headless'>
              Headless Next.js
            </Label>
          </div>

          <div className='flex items-center space-x-1'>
            <Input
              type='checkbox'
              id='maintenance'
              className='w-4 h-4'
              onChange={handleCheckboxChange}
            />
            <Label className='px-2' htmlFor='maintenance'>
              Website Maintenance
            </Label>
          </div>

          <div className='flex items-center space-x-1'>
            <Input
              type='checkbox'
              id='wordpress'
              className='w-4 h-4'
              onChange={handleCheckboxChange}
            />
            <Label className='px-2' htmlFor='wordpress'>
              WordPress Development
            </Label>
          </div>

          <div className='flex items-center space-x-1'>
            <Input
              type='checkbox'
              id='blacklist'
              className='w-4 h-4'
              onChange={handleCheckboxChange}
            />
            <Label className='px-2' htmlFor='blacklist'>
              Blacklist removal & Web reputation
            </Label>
          </div>

          <div className='flex items-center space-x-1'>
            <Input
              type='checkbox'
              id='error'
              className='w-4 h-4'
              onChange={handleCheckboxChange}
            />
            <Label className='px-2' htmlFor='error'>
              Fix any kind of website errors
            </Label>
          </div>

          <div className='flex items-center space-x-1'>
            <Input
              type='checkbox'
              id='dns'
              className='w-4 h-4'
              onChange={handleCheckboxChange}
            />
            <Label className='px-2' htmlFor='dns'>
              DNS, SSL, cPanel, Hosting support
            </Label>
          </div>

          <div className='flex items-center space-x-1'>
            <Input
              type='checkbox'
              id='other'
              className='w-4 h-4'
              onChange={handleCheckboxChange}
            />
            <Label className='px-2' htmlFor='other'>
              Other...
            </Label>
          </div>
        </div>
      </div>

      {(selectedOptions.blacklist ||
        selectedOptions.dns ||
        selectedOptions.error ||
        selectedOptions.fixHack ||
        selectedOptions.hosting ||
        selectedOptions.maintenance ||
        selectedOptions.wordpress ||
        selectedOptions.other) && <hr className='my-4' />}

      <div className='py-4'>
        {selectedOptions.fixHack && (
          <div className='py-2'>
            <Label className='px-0' htmlFor='fixHackUrl-detail'>
              Website URL for Malware Removal & Hack Fix
            </Label>
            <Input
              type='text'
              id='fixHackUrl-detail'
              placeholder='Enter the website URL'
              className='border-gray-500 mt-1 border w-full'
            />
          </div>
        )}

        {selectedOptions.reactNode && (
          <div className='py-2'>
            <Label className='px-0' htmlFor='reactNodeProject-detail'>
              Explain about the React/Node.js project
            </Label>
            <textarea
              id='reactNodeProject-detail'
              placeholder='Describe your project'
              className='border-gray-500 mt-1 p-2 border rounded w-full'
              rows={3}
            />
          </div>
        )}

        {selectedOptions.hosting && (
          <div className='py-2'>
            <Label className='px-0' htmlFor='hostingDetails-detail'>
              VPS Server Administration Details
            </Label>
            <Input
              type='text'
              id='hostingDetails-detail'
              placeholder='Provide server details'
              className='border-gray-500 mt-1 border w-full'
            />
          </div>
        )}

        {selectedOptions.headless && (
          <div className='py-2'>
            <Label className='px-0' htmlFor='headless-detail'>
              Explain about the headless next.js project
            </Label>
            <textarea
              id='headless-detail'
              placeholder='Describe your project'
              className='border-gray-500 mt-1 p-2 border rounded w-full'
              rows={3}
            />
          </div>
        )}

        {selectedOptions.maintenance && (
          <div className='py-2'>
            <Label className='px-0' htmlFor='maintenanceDetails-detail'>
              Website Maintenance Details
            </Label>
            <Input
              type='text'
              id='maintenanceDetails-detail'
              placeholder='Provide maintenance details'
              className='border-gray-500 mt-1 border w-full'
            />
          </div>
        )}

        {selectedOptions.wordpress && (
          <div className='py-2'>
            <Label className='px-0' htmlFor='wordpressDetails-detail'>
              WordPress Development Details
            </Label>
            <textarea
              id='wordpressDetails-detail'
              placeholder='Describe your WordPress project'
              className='mt-1 p-2 border rounded w-full'
              rows={3}
            />
          </div>
        )}

        {selectedOptions.blacklist && (
          <div className='py-2'>
            <Label className='px-0' htmlFor='blacklistDetails-detail'>
              Blacklist Removal & Web Reputation Details
            </Label>
            <Input
              type='text'
              id='blacklistDetails-detail'
              placeholder='Provide details'
              className='border-gray-500 mt-1 border w-full'
            />
          </div>
        )}

        {selectedOptions.error && (
          <div className='py-2'>
            <Label className='px-0' htmlFor='errorDetails-detail'>
              Website Error Details
            </Label>
            <textarea
              id='errorDetails-detail'
              placeholder='Describe the website error'
              className='mt-1 p-2 border rounded w-full'
              rows={4}
            />
          </div>
        )}

        {selectedOptions.dns && (
          <div className='py-2'>
            <Label className='px-0' htmlFor='dnsDetails-detail'>
              DNS, SSL, cPanel, Hosting Support Details
            </Label>
            <Input
              type='text'
              id='dnsDetails-detail'
              placeholder='Provide details'
              className='border-gray-500 mt-1 border w-full'
            />
          </div>
        )}

        {selectedOptions.other && (
          <div className='py-2'>
            <Label className='px-0' htmlFor='otherDetails-detail'>
              Other Services
            </Label>
            <textarea
              id='otherDetails-detail'
              placeholder='Describe your specific requirements'
              className='mt-1 p-2 border rounded w-full'
              rows={4}
            />
          </div>
        )}
      </div>
      <hr className='my-4' />
      <div className='space-y-4'>
        <h3 className='py-4 font-medium'>
          <strong>Timeline.</strong> When do you need this completed by?
        </h3>
        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Please choose one...' />
          </SelectTrigger>
          <SelectContent className='bg-white'>
            <SelectGroup>
              <SelectItem value='apple'>As soon as possible</SelectItem>
              <SelectItem value='banana'>Within a week</SelectItem>
              <SelectItem value='blueberry'>Within 2 week</SelectItem>
              <SelectItem value='grapes'>Within a month</SelectItem>
              <SelectItem value='pineapple'>
                When you are available, let me know
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <p className='text-gray-500 text-sm'>
          For urgent fixes such as hack recovery, malware removal, blacklist
          removal, DNS issues, SSL installation, cPanel support, or resolving
          any kind of website errors, I can typically resolve these issues
          within 2-4 days. However, for more extensive web development projects,
          I generally recommend allowing at least three weeks to ensure a
          thorough and high-quality outcome. This timeline allows for proper
          planning, development, testing, and revisions to meet your specific
          needs and deliver a polished final product.
        </p>
      </div>
      <hr className='my-4' />

      <div className='space-y-4'>
        <h3 className='py-4 font-medium'>
          <strong>Budge.</strong> How much are you planning to invest in the
          project? (USD)
        </h3>

        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Please choose one...' />
          </SelectTrigger>
          <SelectContent className='bg-white'>
            <SelectGroup>
              <SelectItem value='apple'>
                {'$100 (only for urgent fixes)'}
              </SelectItem>
              <SelectItem value='banana'>{'$200-$500'}</SelectItem>
              <SelectItem value='blueberry'>{'$500-$1000'}</SelectItem>
              <SelectItem value='grapes'>{'$1000-$2000'}</SelectItem>
              <SelectItem value='pineapple'>{'$2000+'}</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <p className='text-gray-500 text-sm'>
          When choosing a budget, consider the scope of your project. For quick
          fixes like malware removal or SSL installation, $100 is ideal. For
          more detailed work, $200-$500 suits smaller projects, while $500-$1000
          covers mid-sized tasks like integrations. Larger, more complex
          projects may need $1000-$2000, and for full-scale development, a
          budget of $2000+ is recommended.
        </p>
      </div>

      <hr className='my-4' />

      <div>
        <h3 className='py-4 font-medium'>
          Please provide any additional details for the project
        </h3>
        <textarea
          id='reactNodeProject'
          placeholder='Describe your project'
          className='border-gray-500 mt-1 p-2 border rounded w-full'
          rows={3}
        />
      </div>

      <input type='hidden' name='' placeholder='honeypot' />

      <Button type='submit' className='bg-black text-white'>
        Submit
      </Button>
    </div>
  );
};

export default HireMe;

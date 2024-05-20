import Image from 'next/image'
import React from 'react'
import ellipsesIcon from '../../../public/icon-ellipsis.svg'
import icon from '../../assets/icon-work.svg'
import { previousTimePeriod } from '../../data/constants'

interface Activity {
  name: string
  timeData: { current: number; previous: number }
  activityColour: string
  activityIcon: string
  timeSetting: string
}

const ActivityCard = ({name, timeData, activityColour, activityIcon, timeSetting}: Activity) => {
  return (
    <section
    className='relative w-80 sm:w-[327px] lg:w-64 lg:max-h-[244px]'>
      <div 
      style={{backgroundColor: activityColour}}
      className="sm:w-full lg:w-64 h-40 rounded-[15px] bg-pale-blue relative"
      >
        <div className='w-[78px) h-[78px] relative overflow-hidden'>
          <Image
            src={activityIcon}
            alt="Background-icon"
            className="object-contain absolute right-5 -top-[7px]"
          />
        </div>
      </div>

      <div className='bg-blue-primary hover:bg-blue-hover cursor-pointer custom-transition sm:w-full lg:w-64 sm:h-[120px] lg:h-[199px] rounded-[15px] p-[30px] absolute z-10 top-11 flex-col'>
        <div className='flex flex-row justify-between items-center' >
          <p className='text-white text-lg/[21px] font-rubik-med'>{name}</p>
          <Image
            src={ellipsesIcon}
            width={16}
            height={5}
            alt="Ellipses icon"
            className='cursor-pointer'
          />
        </div>
        <div className='sm:max-lg:flex sm:flex-row items-center justify-between'>
        <div className='text-white sm:text-[32px] lg:text-[56px]/[66px] font-rubik-light sm:mt-1 lg:mt-6'>{timeData.current}hrs</div>
        <div className='text-purple-text text-[15px]/[18px] font-rubik-reg mt-2'>{previousTimePeriod[timeSetting]} - {timeData.previous}hrs</div>
        </div>
      </div>
    </section>
  )
}

export default ActivityCard
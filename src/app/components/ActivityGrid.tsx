import React from 'react'
import ActivityCard from './ActivityCard'
import data from '../../data/data.json'
import { activityColours, activityIcons } from "../../data/constants"

const ActivityGrid = ({timeSetting}: {timeSetting: "daily" | "weekly" | "monthly" }) => {
  return (
    <div 
    className='relative grid sm:gap-y-[30px] lg:gap-y-[30px] gap-x-[25px] xl:gap-x-[30px] sm:grid-cols-1 lg:grid-cols-3 sm:max-lg:mb-12'>
      {data.map((activity) => {
        const timeSettingData: { current: number, previous: number} = activity.timeframes[timeSetting]
      return (
      <>
        <ActivityCard 
        name={activity.title}
        timeData={timeSettingData}
        activityColour={activityColours[activity.title]}
        activityIcon={activityIcons[activity.title]}
        timeSetting={timeSetting}
        key={activity.title} 
        />
      </>
      )
      })}
    </div>
  )
}

export default ActivityGrid
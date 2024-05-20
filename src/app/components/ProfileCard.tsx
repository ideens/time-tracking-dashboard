import React from "react";
import ProfileImage from "../../../public/image-jeremy.png";
import Image from "next/image";

interface ProfileCardProps {
  timeSetting: "daily" | "weekly" | "monthly";
  setTimeSetting: (newTimeSetting: "daily" | "weekly" | "monthly") => void;
}

const ProfileCard = ({ timeSetting, setTimeSetting }: ProfileCardProps) => {
  const TIME_PERIOD: { DAY: "daily"; WEEK: "weekly"; MONTH: "monthly" } = {
    DAY: "daily",
    WEEK: "weekly",
    MONTH: "monthly",
  };

  const handleSelectedTime = (period: "daily" | "weekly" | "monthly") => {
    return timeSetting === period ? "white" : "inherit";
  };

  return (
    <section className="sm:w-full lg:w-64 sm:h-[203px] lg:h-[518px] lg:mr-[15px] xl:mr-[25px] sm:max-lg:mb-6 relative">
      <div className="sm:w-full lg:w-64 sm:h-[133px] lg:h-[370px] p-8 rounded-[15px] bg-purple-primary absolute z-10 flex sm:flex-row lg:flex-col">
        <div className="w-20 sm:pt-0 lg:pt-[5px]">
          <Image
            src={ProfileImage}
            alt="Profile-icon"
            className="object-contain border-4 border-white rounded-full"
            style={{ filter: "drop-shadow(0px 4px 4px rgb(000 / 0.25))" }}
          />
        </div>
        <div className="flex flex-col sm:max-lg:pl-5">
          <p className="font-rubik-light text-purple-text sm:pt-1 lg:pt-10 text-[15px]">
            Report for
          </p>
          <h1 className="font-rubik-light sm:text-[24px]/[28px] lg:text-[40px]/[52px] text-white pt-1">
            Jeremy Robson
          </h1>
        </div>
      </div>
      <div className="bg-blue-primary sm:w-full lg:w-64 h-full px-8 py-6 rounded-[15px] flex flex-col justify-end">
        <div className="flex sm:flex-row sm:max-lg:justify-between lg:flex-col text-purple-heading gap-4">
          <li
            onClick={() => setTimeSetting(TIME_PERIOD.DAY)}
            className={`hover:text-white text-${handleSelectedTime(
              TIME_PERIOD.DAY
            )} custom-transition`}
          >
            Daily
          </li>
          <li
            onClick={() => setTimeSetting(TIME_PERIOD.WEEK)}
            className={`hover:text-white text-${handleSelectedTime(
              TIME_PERIOD.WEEK
            )} custom-transition`}
          >
            Weekly
          </li>
          <li
            onClick={() => setTimeSetting(TIME_PERIOD.MONTH)}
            className={`hover:text-white text-${handleSelectedTime(
              TIME_PERIOD.MONTH
            )} custom-transition`}
          >
            Monthly
          </li>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;

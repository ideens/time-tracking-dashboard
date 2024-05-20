"use client";
import ActivityGrid from "./components/ActivityGrid";
import { useState } from "react";
import ProfileCard from "./components/ProfileCard";

export default function Home() {
  const [timeSetting, setTimeSetting] = useState<
    "daily" | "weekly" | "monthly"
  >("weekly");

  const handleTimeSettingChange = (
    newTimeSetting: "daily" | "weekly" | "monthly"
  ) => {
    setTimeSetting(newTimeSetting);
  };

  return (
    <main className="h-screen w-screen grid place-items-center bg-blue-dark">
      <section className="flex sm:flex-col lg:flex-row gap-1">
        <ProfileCard
          timeSetting={timeSetting}
          setTimeSetting={handleTimeSettingChange}
        />
        <ActivityGrid timeSetting={timeSetting} />
      </section>
    </main>
  );
}

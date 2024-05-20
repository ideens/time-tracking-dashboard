import { workIcon, exerciseIcon, playIcon, selfCareIcon, studyIcon, socialIcon } from "../assets"

const activityIcons: { [index: string]: string } = {
  "Work": workIcon,
  "Exercise": exerciseIcon,
  "Play": playIcon,
  "Self Care": selfCareIcon,
  "Study": studyIcon,
  "Social": socialIcon, 
};

const activityColours: { [index: string]: string } = {
  "Work": "#FF8B64",
  "Exercise": "#4BCF82",
  "Play": "#55C2E6",
  "Self Care": "#F1C75B",
  "Study": "#FF5E7D",
  "Social": "#7335D2",
};

const previousTimePeriod: { [index: string]: string } = {
  "daily": "Yesterday",
  "weekly": "Last Week",
  "monthly": "Last Month",
};

export { activityIcons, activityColours, previousTimePeriod }
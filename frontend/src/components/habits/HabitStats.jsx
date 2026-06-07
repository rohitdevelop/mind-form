import React from "react";

export default function HabitStats({ stats }) {
  return <div className="habit-stats">{JSON.stringify(stats)}</div>;
}

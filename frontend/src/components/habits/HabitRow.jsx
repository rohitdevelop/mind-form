import React from "react";

export default function HabitRow({ habit }) {
  return (
    <tr>
      <td>{habit.name}</td>
      <td>{habit.streak}</td>
    </tr>
  );
}

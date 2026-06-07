import React from "react";

export default function HabitForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="habit-form">
      <input name="name" placeholder="Habit name" />
      <button type="submit">Save</button>
    </form>
  );
}

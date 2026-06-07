import { useContext } from "react";
import { HabitContext } from "../context/HabitContext";

export default function useHabits() {
  return useContext(HabitContext);
}

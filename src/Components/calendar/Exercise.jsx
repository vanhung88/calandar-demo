import { AddIcon } from "../../assets/svg/add";
import { WorkOut } from "./WorkOut";

export function Exercise({ item }) {
  return (
    <div>
      {item?.map((exercise, index) => (
        <div key={index} className="exercise mt-8">
          <div className="title exercise-title truncate">{exercise.title}</div>
          {exercise?.workouts?.map((workOut, index) => (
            <WorkOut item={workOut} key={index} />
          ))}
          <div className="flex justify-end mt-8">
            <AddIcon />
          </div>
        </div>
      ))}
    </div>
  );
}

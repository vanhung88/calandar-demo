import "./style.css";
import { calendarInWeek } from "../../mocks/calendarInWeek.js";
import { AddIcon } from "../../assets/svg/add";

export default function Calendar() {
  return (
    <div className="container">
      {calendarInWeek.map((item) => (
        <div className="item" key={item.id}>
          <div className="title">{item.title}</div>
          <div className="box-item">
            <div className="title">{item.date}</div>

            {item.exercises && (
              <div>
                {item.exercises.map((exercise, index) => (
                  <div key={index} className="exercise mt-8">
                    <div className="title exercise-title truncate">
                      {exercise.title}
                    </div>
                    {exercise.item.map((workOut, index) => (
                      <div className="work-out" key={index}>
                        <div className="truncate text-right ml-30">
                          {workOut.title}
                        </div>
                        <div className="flex justify-between w-full color mt-8">
                          <span>{workOut.quantity}</span>
                          <span className="truncate w-80">
                            {workOut.description}
                          </span>
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-end mt-8">
                      <AddIcon />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

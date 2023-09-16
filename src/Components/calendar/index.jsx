import "./style.css";
import { calendarInWeek } from "../../mocks/calendarInWeek.js";
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
                {item.exercises.map((exercise) => (
                  <div className="exercise">
                    <div className="exercise-title title-color ">
                      {exercise.title}
                    </div>
                    {exercise.item.map((workOut) => (
                      <div>
                        <div className="exercise-title">{workOut.title}</div>
                      </div>
                    ))}
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

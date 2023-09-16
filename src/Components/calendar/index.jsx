import "./style.css";
import { calendarInWeek } from "../../mocks/calendarInWeek.js";
import { Exercise } from "./Exercise";
import classNames from "classnames";
import dayjs from "dayjs";

export default function Calendar() {
  return (
    <div className="container">
      {calendarInWeek.map((item) => (
        <div className="item" key={item.id}>
          <div className="title">{item.title}</div>
          <div className="box-item">
            <div
              className={classNames("title", {
                ["exercise-title"]: dayjs().format("DD") === item.date,
              })}
            >
              {item.date}
            </div>
            {item.exercises && <Exercise exercises={item.exercises} />}
          </div>
        </div>
      ))}
    </div>
  );
}

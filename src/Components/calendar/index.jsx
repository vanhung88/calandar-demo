import './style.css';
import { calendarInWeek } from '../../mocks/calendarInWeek.js';
import { Exercise } from './Exercise';

export default function Calendar() {
  return (
    <div className="container">
      {calendarInWeek.map((item) => (
        <div className="item" key={item.id}>
          <div className="title">{item.title}</div>
          <div className="box-item">
            <div className="title">{item.date}</div>
            {item.exercises && <Exercise item={item.exercises} />}
          </div>
        </div>
      ))}
    </div>
  );
}

import { useState } from 'react';
import { AddIcon } from '../../assets/svg/add';
import { WorkOut } from './WorkOut';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export function Exercise({ item }) {
  console.log('debug', item);
  const [items, setItems] = useState(item);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) {
      return;
    }

    if (active.id !== over.id) {
      const oldIndex = items.findIndex((v) => v.id === active.id);
      const newIndex = items.findIndex((v) => v.id === over.id);
      setItems(arrayMove(items, oldIndex, newIndex));
    }
  };
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {item?.map((exercise) => (
          <ExerciseBox key={exercise?.id} exercise={exercise} />
        ))}
      </SortableContext>
    </DndContext>
  );
}

export const ExerciseBox = ({ exercise }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: exercise.id });

  const style = {
    cursor: 'move',
    listStyle: 'none',
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="exercise mt-8"
    >
      <div className="title exercise-title truncate">{exercise.title}</div>
      {exercise?.workouts?.map((workOut, index) => (
        <WorkOut item={workOut} key={index} />
      ))}
      <div className="flex justify-end mt-8">
        <AddIcon />
      </div>
    </div>
  );
};

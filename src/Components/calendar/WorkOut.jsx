export function WorkOut({ item }) {
  return (
    <div className="work-out">
      <div className="truncate text-right ml-30">{item.title}</div>
      <div className="flex justify-between w-full color mt-8">
        <span>{item.quantity}</span>
        <span className="truncate w-80">{item.description}</span>
      </div>
    </div>
  );
}

export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        {" "}
        <em>Start adding some items to your packing list 🚀</em>{" "}
      </footer>
    );
  }
  const itemsCount = items.length;
  const itemsPacked = items.filter((item) => item.packed === true).length;
  const itemsPackedPercent = Math.round((itemsPacked / itemsCount) * 100);
  return (
    <footer className="stats">
      <em>
        {itemsPackedPercent === 100
          ? "💯You got everything! You are ready to go✈️"
          : `💼You have ${itemsCount} items on your list, and you already packed
      ${itemsPacked} (${itemsPackedPercent}%)`}
      </em>
    </footer>
  );
}

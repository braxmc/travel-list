export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list!</em>
      </footer>
    );
  }

  let totalItems = items.length;
  let numPacked = items.filter((item) => item.packed).length;
  let percentage = Math.trunc((numPacked / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have gotten everything ready to go!"
          : `You have ${totalItems} items on your list, and you already packed${" "}
        ${numPacked} (${percentage ? percentage : 0}%)`}
      </em>
    </footer>
  );
}

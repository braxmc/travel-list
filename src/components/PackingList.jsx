import Item from "./Item";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map(item =>
          <Item 
            key={item.id}
            item={item}
          />
        )}
      </ul>
    </div>
  );
}
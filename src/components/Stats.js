export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items you would like to pack to your list!</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "Looks like you have everything packed! You're ready to go!"
          : `You have ${numItems} on your list,
        and you already packed ${numPacked} (${percentagePacked}%)`}
      </em>
    </footer>
  );
}

function GeneroButton({ value, active, color, onClick }) {
  const bgColor = active ? `bg-${color}-400` : `bg-${color}-300`;
  const hoverColor = `hover:bg-${color}-400`;

  return (
    <input
      type="button"
      value={value}
      onClick={onClick}
      className={`px-4 py-2 rounded font-medium cursor-pointer transition ${bgColor} ${hoverColor}`}
    />
  );
}

export default GeneroButton;

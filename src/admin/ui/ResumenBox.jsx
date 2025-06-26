function ResumenBox({ label, value, bgColor = "bg-white" }) {
  return (
    <div className={`${bgColor} p-4 rounded-2xl shadow text-center`}>
      <p className="text-gray-500">{label}</p>
      <h2 className="text-2xl font-semibold">{value}</h2>
    </div>
  );
}

export default ResumenBox;

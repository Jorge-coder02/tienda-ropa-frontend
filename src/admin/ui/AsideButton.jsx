// Este componente es un botón que cambia la vista al hacer clic.
function AsideButton({ texto, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-left text-slate-700 font-semibold hover:bg-slate-100 hover:text-black rounded-2xl px-4 py-2"
    >
      {texto}
    </button>
  );
}

export default AsideButton;

export default function ToggleButton() {
  return (
    <div className="">
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="w-9 h-5 bg-darkPurple hover:bg-green peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700"></div>

        <div className="uppercase text-xs text-darkPurple font-bold tracking-widest">
          Dark mode
        </div>
      </label>
    </div>
  );
}

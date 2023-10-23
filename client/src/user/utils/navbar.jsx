function Navbar() {
  return (
    <div className="w-full py-3 px-4 bg-slate-50">
      <ul className="flex justify-end gap-6 items-center">
        <li className="hover:border-b-2 p-2 hover:text-slate-700 cursor-pointer">
          Abut Us
        </li>
        <li className="bg-orange-400 p-2 rounded-lg text-white font-semibold">
          Log As Admin
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

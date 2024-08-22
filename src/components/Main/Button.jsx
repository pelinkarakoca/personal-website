/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Button({ children, icon }) {
  return (
    <div>
      <button className="flex items-center justify-center rounded-xl bg-customWhite px-[2em] py-[0.6em] text-lg font-semibold text-customPurple2">
        <FontAwesomeIcon />

        {children}
      </button>
    </div>
  );
}

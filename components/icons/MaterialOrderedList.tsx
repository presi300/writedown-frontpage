import React from "react";

const MaterialOrderedList = ({ ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M3.75 22q-.325 0-.537-.213T3 21.25q0-.325.213-.537t.537-.213H5.5v-.75h-.75q-.325 0-.537-.213T4 19q0-.325.213-.537t.537-.213h.75v-.75H3.75q-.325 0-.537-.213T3 16.75q0-.325.213-.537T3.75 16H6q.425 0 .713.288T7 17v1q0 .425-.288.713T6 19q.425 0 .713.288T7 20v1q0 .425-.288.713T6 22H3.75Zm0-7q-.325 0-.537-.213T3 14.25v-2q0-.425.288-.713T4 11.25h1.5v-.75H3.75q-.325 0-.537-.213T3 9.75q0-.325.213-.537T3.75 9H6q.425 0 .713.288T7 10v1.75q0 .425-.288.713T6 12.75H4.5v.75h1.75q.325 0 .537.213T7 14.25q0 .325-.213.537T6.25 15h-2.5Zm1.5-7q-.325 0-.537-.213T4.5 7.25V3.5h-.75q-.325 0-.537-.213T3 2.75q0-.325.213-.537T3.75 2h1.5q.325 0 .537.213T6 2.75v4.5q0 .325-.213.537T5.25 8ZM10 19q-.425 0-.713-.288T9 18q0-.425.288-.713T10 17h10q.425 0 .713.288T21 18q0 .425-.288.713T20 19H10Zm0-6q-.425 0-.713-.288T9 12q0-.425.288-.713T10 11h10q.425 0 .713.288T21 12q0 .425-.288.713T20 13H10Zm0-6q-.425 0-.713-.288T9 6q0-.425.288-.713T10 5h10q.425 0 .713.288T21 6q0 .425-.288.713T20 7H10Z"
      />
    </svg>
  );
};

export default MaterialOrderedList;
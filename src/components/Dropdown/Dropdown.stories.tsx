import React from "react";
import Dropdown from "./Dropdown";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Pokemon/Dropdown",
  component: Dropdown,
};

const options = [
  {
    value: "Sun",
    id: 1,
  },
  {
    value: "Mon",
    id: 2,
  },
  {
    value: "Tue",
    id: 3,
  },
  {
    value: "Wed",
    id: 4,
  },
  {
    value: "Thu",
    id: 5,
  },
  {
    value: "Fri",
    id: 6,
  },
  {
    value: "Sat",
    id: 7,
  },
];

export const Dropdown_1 = () => {
  const [selectedDropdownItem, setSelectedDropDownItem] = React.useState(null);
  return (
    <Dropdown
      options={options}
      selectedItem={selectedDropdownItem}
      onDropDownItemSelection={setSelectedDropDownItem}
    />
  );
};

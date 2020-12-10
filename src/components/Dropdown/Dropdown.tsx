import React, { useState } from "react";
import Arrow from "../Arrow/Arrow";
import PropTypes from "prop-types";
import styles from "./Dropdown.module.css";

interface Option {
  value: string;
  id: number;
}

interface DropdownProps {
  options: Array<Option>;
  selectedItem: Option | null;
  onDropDownItemSelection: any;
}

interface DropdownMenuPros {
  selectedItem: Option | null;
  open: boolean;
  onClick: any;
}

interface DropdownItemProps {
  options: Array<Option>;
  onDropDownItemSelection: any;
  onClick: any;
}

const Dropdown = ({
  options,
  selectedItem,
  onDropDownItemSelection,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.Dropdown}>
      <DropdownMenu selectedItem={selectedItem} open={open} onClick={setOpen} />
      {open && (
        <ul className={styles.dropdownList}>
          {options && (
            <DropdownItem
              options={options}
              onDropDownItemSelection={onDropDownItemSelection}
              onClick={setOpen}
            />
          )}
        </ul>
      )}
    </div>
  );
};

const DropdownMenu = ({ selectedItem, open, onClick }: DropdownMenuPros) => {
  return (
    <div className={styles.DropdownMenu} onClick={() => onClick(!open)}>
      {selectedItem ? selectedItem.value : "Dropdown List"}
      <span className={styles.dropdownArrowIcon}>
        {open ? <Arrow direction={180} /> : <Arrow direction={90} />}
      </span>
    </div>
  );
};

const DropdownItem = ({
  options,
  onDropDownItemSelection,
  onClick,
}: DropdownItemProps) => {
  return (
    <>
      {options.map((option) => {
        return (
          <li
            className={styles.dropdownListItem}
            key={option.id}
            onClick={() => {
              onDropDownItemSelection(option);
              onClick((prev: boolean) => !prev);
            }}
          >
            {option.value}
          </li>
        );
      })}
    </>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array,
  selectedItem: PropTypes.object,
  onDropDownItemSelection: PropTypes.func,
};

export default Dropdown;

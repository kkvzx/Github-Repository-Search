import React from 'react';

const Dropdown = ({setSelectedSort}: DropdownProps) => {
  const sortOptions = [
    {label: 'Best match', sort: ''},
    {label: 'Most stars', sort: 'stars'},
    {label: 'Fewest stars', sort: 'stars', order: 'asc'},
    {label: 'Most forks', sort: 'forks'},
    {label: 'Fewest forks', sort: 'forks', order: 'asc'},
  ];

  const handleSelect = (e: any) => {
    let currentSelection = e.currentTarget.value;
    console.log(currentSelection);
    if (currentSelection == 'Best match') setSelectedSort({sort: '', order: ''});
    else if (currentSelection == 'Most stars') setSelectedSort({sort: 'stars', order: ''});
    else if (currentSelection == 'Fewest stars') setSelectedSort({sort: 'stars', order: 'asc'});
    else if (currentSelection == 'Most forks') setSelectedSort({sort: 'forks', order: ''});
    else if (currentSelection == 'Fewest forks') setSelectedSort({sort: 'forks', order: 'asc'});
  };

  return (
    <select onChange={handleSelect}>
      {sortOptions.map(({label}, index) => (
        <option key={index} value={label}>
          {label}
        </option>
      ))}
    </select>
  );
};

interface DropdownProps {
  setSelectedSort: React.Dispatch<
    React.SetStateAction<{
      sort: string;
      order: string;
    }>
  >;
}
export default Dropdown;

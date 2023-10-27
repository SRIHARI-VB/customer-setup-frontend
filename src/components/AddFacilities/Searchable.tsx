import React, { useState } from 'react';
import Select from 'react-select';

const SearchField = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [customValue, setCustomValue] = useState('');
  const options = [
    { value: 'School', label: 'School' },
    { value: 'Park', label: 'Park' },
    { value: 'Gym', label: 'Gym' },
    { value: 'Office', label: 'Office' },
    { value: 'Bunk', label: 'Gym' },
    { value: 'shop', label: 'shop' },
    { value: 'store', label: 'Store' },
    { value: 'station', label: 'station' },
    { value: 'Others', label: 'Others' },
  ];

  const handleSelectChange = (selectedValue:any) => {
    setSelectedValue(selectedValue);
  };

  const handleCustomInputChange = (inputValue: React.SetStateAction<string>) => {
    const isKnownOption = options.some(option =>
      option.label.toLowerCase() === inputValue
    );

    setCustomValue(inputValue);
    // setSelectedValue(isKnownOption ? { label: inputValue, value: inputValue } : null);
  };
  const customStyles = {
    control: (base:any) => ({
      ...base,
      border: 'none', // Remove the border
      boxShadow: 'none', // Remove the box-shadow
    }),
  };
  return (
    <div style={{ width: '100%' }}>
    <fieldset style={{borderRadius:"10px", marginBottom:"40px"}}>
   <div style={{border:"none",outline:"none"}}>
   <Select
   styles={customStyles}
        options={options}
        value={selectedValue}
        onChange={handleSelectChange}
        isSearchable
        placeholder="Search or select an item"
        inputValue={customValue}
        onInputChange={handleCustomInputChange}
      ></Select>
   </div>
    </fieldset>
    </div>
  );
};

export default SearchField;

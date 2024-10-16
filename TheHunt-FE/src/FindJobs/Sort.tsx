import { useState } from 'react';
import { Combobox, useCombobox } from '@mantine/core';
import { TbAdjustments } from 'react-icons/tb';

const opt = ['Relevance', 'Most Recent', 'Salary (Low to High)', 'Salary (High to Low)'];

const Sort = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>('Relevance');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option className='!text-xs hover:bg-congress-blue-950' value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      

      <Combobox
        store={combobox}
        width={150}
        position="bottom-start"
        
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>

          <div onClick={() => combobox.toggleDropdown()} className='cursor-pointer border border-bright-sun-400 flex gap-2 items-center px-2 py-1 rounded-xl text-sm'> 
            {selectedItem} <TbAdjustments className='h-5 w-5 text-bright-sun-400 '/>

          </div>

        </Combobox.Target>

        <Combobox.Dropdown className='bg-congress-blue-900  !border-congress-blue-800'>
          <Combobox.Options >{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}


export default Sort;
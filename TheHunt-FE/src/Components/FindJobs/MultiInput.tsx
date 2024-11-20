import { useEffect, useState } from 'react';
import { Checkbox, Combobox, Group, Input, Pill, PillsInput, useCombobox } from '@mantine/core';
import { HiSelector } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../Slices/FilterSlice';

const MultiInput = (props: any) => {

	const dispatch = useDispatch();

	useEffect(() => {

		setData(props.options);
	}, [])

	const combobox = useCombobox({
		onDropdownClose: () => combobox.resetSelectedOption(),
		onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
	});

	const [search, setSearch] = useState('');
	const [data, setData] = useState<string[]>([]);
	const [value, setValue] = useState<string[]>([]);

	const exactOptionMatch = data.some((item) => item === search);

	const handleValueSelect = (val: string) => {
		setSearch('');

		if (val === '$create') {
			setData((current) => [...current, search]);
			setValue((current) => [...current, search]);
			dispatch(updateFilter({ [props.title]: [...value, search] }));

		} else {

			dispatch(updateFilter({ [props.title]: value.includes(val) ? value.filter((v) => v !== val) : [...value, val] }));

			setValue((current) =>
				current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
			);
		}
	};

	const handleValueRemove = (val: string) => {

		dispatch(updateFilter({ [props.title]: value.filter((v) => v !== val) }));
		setValue((current) => current.filter((v) => v !== val));
	}

	
	const values = value
		.slice(0, 1)
		.map((item) => (
			<Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)} className='bg-congress-blue-900 '>
				{item}
			</Pill>
		));

	const options = data.filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
		.map((item) => (
			<Combobox.Option className=' hover:bg-congress-blue-950' value={item} key={item} active={value.includes(item)}>
				<Group gap="sm" >
					<Checkbox size='xs' color='bright-sun.4' className='[&_input]:bg-congress-blue-950'

						checked={value.includes(item)}
						onChange={() => { }}
						aria-hidden
						tabIndex={-1}
						style={{ pointerEvents: 'none' }}
					/>
					<span className='text-congress-blue-300 ' >{item}</span>
				</Group>
			</Combobox.Option>
		));

	return (
		<Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
			<Combobox.DropdownTarget >
				<PillsInput variant='unstyled' rightSection={<HiSelector />} onClick={() => combobox.toggleDropdown()}

					leftSection={

						<div className='text-bright-sun-400 p-1 bg-congress-blue-900 rounded-full mr-2 '><props.icon /></div>
					}

				>
					<Pill.Group className='[&_input]:text-congress-blue-50' >
						{value.length > 0 ? (
							<>
								{values}
								{value.length > 1 && (
									<Pill className='bg-congress-blue-900'>+{value.length - 1} more</Pill>
								)}
							</>
						) : (
							<Input.Placeholder className='!text-congress-blue-200' >{props.title}</Input.Placeholder>
						)}

					</Pill.Group>
				</PillsInput>
			</Combobox.DropdownTarget>

			{/* CHANGED BORDER COLOR */}

			<Combobox.Dropdown className='bg-congress-blue-900 [&_input]:bg-congress-blue-900 !border-congress-blue-800'>
				<Combobox.Search
					value={search}
					onChange={(event) => setSearch(event.currentTarget.value)}
					placeholder={props.title}
				/>
				<Combobox.Options className='bg-congress-blue-900'>
					{options}

					{!exactOptionMatch && search.trim().length > 0 && (
						<Combobox.Option className='bg-congress-blue-900 hover:bg-congress-blue-950' value="$create">+ Create {search}</Combobox.Option>
					)}

					{exactOptionMatch && search.trim().length > 0 && options.length === 0 && (
						<Combobox.Empty>Nothing found</Combobox.Empty>
					)}
				</Combobox.Options>
			</Combobox.Dropdown>
		</Combobox>
	);
}

export default MultiInput;
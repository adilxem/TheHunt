import { Menu, rem, Avatar, Switch, Divider } from '@mantine/core';
import { FaUserCircle } from 'react-icons/fa';
import { TbLogout2, TbMessageCircle } from 'react-icons/tb';
import { PiMoonStarsBold, PiReadCvLogoBold } from "react-icons/pi";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSun } from 'react-icons/fi';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../Slices/UserSlice';
import { successNotification } from '../../Services/NotificationService';

const ProfileMenu = () => {

	const dispatch = useDispatch();

	const user = useSelector((state : any) => state.user);

	const profile = useSelector((state: any) => state.profile);

	const [checked, setChecked] = useState(false);
	const [opened, setOpened] = useState(false);

	const navigate = useNavigate();

	const handleLogout = () => {

		dispatch(removeUser());

		// on logout, you can use navigate to send the user back to either the login page or the home page

		navigate("/");

		successNotification ("User Logged Out", "You have been logged out successfully");
	}

	return (
		<div>

			<Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
				<Menu.Target>
					<div className="flex gap-2 items-center justify-center cursor-pointer">
						<div>
							{user.name}
						</div>

						{/* <Avatar src={profile.picture ? `data : image/jpeg; base64, ${profile.picture}` : "/Avatars/avatar1.png"} alt="it's me" color="orange" /> */}

						<Avatar
						// className="!h-48 !w-48 border-congress-blue-950 border-8 rounded-full"
						src={profile.picture ? `data:image/jpeg;base64,${profile.picture}` : "/Avatars/avatar1.png"}
						alt="user"
						onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
							const target = e.target as HTMLImageElement;
							target.src = "/Avatars/avatar1.png"; 
						}}
					/>
					</div>
				</Menu.Target>

				<Menu.Dropdown
					onChange={() => setOpened(true)}
					className='bg-congress-blue-900 border-congress-blue-800 '>

					<Link to="/profile">

						<Menu.Item className='hover:bg-congress-blue-800' leftSection={<FaUserCircle style={{ width: rem(14), height: rem(14) }} />}>
							Profile
						</Menu.Item>
					</Link>

					<Menu.Item className='hover:bg-congress-blue-800' leftSection={<TbMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
						Messages
					</Menu.Item>
					<Menu.Item className='hover:bg-congress-blue-800' leftSection={<PiReadCvLogoBold style={{ width: rem(14), height: rem(14) }} />}>
						Resume
					</Menu.Item>
					<Menu.Item className='hover:bg-congress-blue-800'

						leftSection={<MdOutlineDarkMode style={{ width: rem(14), height: rem(14) }} />}

						rightSection={
							<Switch checked={checked}
								onChange={(event) => setChecked(event.currentTarget.checked)}
								className='[&_div]:bg-congress-blue-950 [&_div]:border-congress-blue-950' size="md" color="dark.4" onLabel={<FiSun className='w-4 h-4 text-bright-sun-400' />} offLabel={<PiMoonStarsBold className='w-4 h-4 text-congress-blue-400' />} />
						}
					>
						Dark Mode
					</Menu.Item>

					{/* <Menu.Divider /> */}
					<Divider size="xs" className='m-2' color="congress-blue.7" />

					<Menu.Item className='hover:bg-congress-blue-950'

						onClick={handleLogout}
						color="red"
						leftSection={<TbLogout2 style={{ width: rem(14), height: rem(14) }} />}
					>
						Logout

					</Menu.Item>
				</Menu.Dropdown>
			</Menu>


		</div>
	)
}

export default ProfileMenu;
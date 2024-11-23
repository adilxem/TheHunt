import { Indicator, Menu } from "@mantine/core";
import { Notification } from '@mantine/core';
import { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { useSelector } from "react-redux";
import { getNotifications, readNotifications } from "../../Services/NotiService";
import { useNavigate } from "react-router-dom";

const NotificationMenu = () => {

	const user = useSelector((state: any) => state.user);

	const navigate = useNavigate();

	const [notifications, setNotifications] = useState<any>([]);

	useEffect(() => {

		getNotifications(user.id).then((res) => {

			console.log(res);

			setNotifications(res);
		})
			.catch((err) => console.log(err));

	}, [user]);

	const unread = (index: number) => {

		let notis = [...notifications];

		notis = notis.filter((noti: any, i: number) => i != index);

		setNotifications(notis);

		readNotifications(notifications[index].id).then((res) => console.log(res)).catch((err) => console.log(err));
		
	}

	const [opened, setOpened] = useState(false);


	return <div>

		<Menu shadow="md" width={300} opened={opened} onChange={setOpened}>
			<Menu.Target>
				<div className="bg-congress-blue-900 p-1.5 rounded-full cursor-pointer">

					<Indicator disabled={notifications.length <= 0} color="bright-sun.4" offset={6} size={8} processing>

						<IoNotifications className="h-6 w-6" />

					</Indicator>
				</div>
			</Menu.Target>

			<Menu.Dropdown
				onChange={() => setOpened(true)}
				className='bg-congress-blue-900 border-congress-blue-800 '>

				<div className="text-center font-semibold text-bright-sun-400 mt-2">

					Notification(s)
				</div>

				<div className="flex flex-col">

					{
						notifications.map((noti: any, index: number) =>

							<Notification 
							onClick={() => {
								
								navigate(noti.route);
								unread(index);
								setOpened(false);
							}}
							key={index} icon={<FaCircleCheck />} color="teal" title={noti.action} mt="md" withCloseButton={true} withBorder onClose={() => unread(index)}
								className={`bg-congress-blue-900 hover:bg-congress-blue-950 border-congress-blue-800 cursor-pointer w-full h-full`}>

								{
									noti.message
								}

							</Notification>
						)
					}

					{
						notifications.length == 0 && <div className="text-center text-congress-blue-300 py-10">
							No Notifications
						</div>
					}

				</div>

			</Menu.Dropdown>
		</Menu>


	</div>
}

export default NotificationMenu;
import { notifications } from "@mantine/notifications"

const successNotification = (title : string , message : string) => {

	notifications.show({
		title: title,
		message: message,
		autoClose: 4000,
		withCloseButton: true,
		withBorder: true,
		className: "!border-blue-500 mb-5 text-blue-200"
	})
}

const errorNotification = (title : string , message : string) => {

	notifications.show({
		title: title,
		message: message,
		withCloseButton: true,
		withBorder: true,
		className: "!border-red-500 mb-5"
	});
}

export {successNotification, errorNotification};
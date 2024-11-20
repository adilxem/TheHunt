const formatDate = (dateString: string) => {

	const date = new Date(dateString);

	const options = { year: 'numeric' as const, month: 'short' as const };

	return date.toLocaleString('en-US', options);
}

function timeAgo(time: string) {
	const now = new Date();
	const postedDate = new Date(time);
	const seconds = Math.floor((now.getTime() - postedDate.getTime()) / 1000);

	const intervals = {
		year: 31536000,
		month: 2592000,
		day: 86400,
		hour: 3600,
		minute: 60,
		second: 1
	};

	for (const [unit, secondsInUnit] of Object.entries(intervals)) {
		const count = Math.floor(seconds / secondsInUnit);
		if (count > 0) {
			return `${count} ${unit}${count > 1 ? 's' : ''} ago`;
		}
	}

	return 'Just now';
}

const getBase64 = (file: any): Promise<string> => {

	return new Promise((resolve, reject) => {

		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = error => reject(error);
	})
}

const formatInterviewTime = (dateStr: any) => {

	const date = new Date(dateStr);

	return date.toLocaleString('en-US', {

		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		hour12: true
	});
}

function openBase64PDF(base64String : string) {

	const byteCharacters = atob(base64String);

	const byteNumbers = new Array(byteCharacters.length);

	for (let i = 0; i < byteCharacters.length; i++) {

		byteNumbers[i] = byteCharacters.charCodeAt(i);
	}

	const byteArray = new Uint8Array(byteNumbers);

	const blob = new Blob([byteArray], {type: 'application/pdf' });

	const blobURL = URL.createObjectURL(blob);

	window.open(blobURL, '_blank');
}


export { formatDate, timeAgo, getBase64, formatInterviewTime, openBase64PDF };
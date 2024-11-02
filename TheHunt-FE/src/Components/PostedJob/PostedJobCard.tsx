const PostedJobCard = (props:any) => {

	return (
		<div className="bg-congress-blue-900 rounded-xl p-2 border-l-2 border-l-bright-sun-400">

			<div className="text-sm font-semibold">{props.jobTitle}</div>
			<div className="text-xs text-congress-blue-300 font-medium">{props.location}</div>
			<div className="text-xs text-congress-blue-300">{props.posted}</div>

		</div>
	)
}

export default PostedJobCard;
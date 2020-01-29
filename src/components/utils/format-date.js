const formatDate = unixTimeStamp => {
	const date = new Date(parseInt(unixTimeStamp, 10) * 1000)
	const year = date.getFullYear()
	const month = date.toLocaleDateString("en", { month: "long" })
	const day = date.getDate()
	return `${day} ${month} ${year}`
}

export default formatDate

/**
 * Given a valid unix time stamp return a date string
 * if format is "day-month-year" return formatted as "22 March 2020"
 * if format is "iso-string" return as a a valid global date and time string
 * i.e. 2022-03-29T07:59:29.000Z
 */
const formatDate = (unixTimeStamp: string, format = 'day-month-year') => {
	const date = new Date(parseInt(unixTimeStamp, 10) * 1000);
	const year = date.getFullYear();
	const month = date.toLocaleDateString('en', { month: 'long' });
	const day = date.getDate();

	if (format === 'iso-string') {
		return date.toISOString();
	}

	return `${day} ${month} ${year}`;
};

export default formatDate;

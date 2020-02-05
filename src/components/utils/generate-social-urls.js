const generateSocialURLs = (doi, articleURL, title, description) => {
	const facebookBaseURL = "https://www.facebook.com/sharer/sharer.php?u="
	const twitterBaseURL = "https://twitter.com/intent/tweet?text="
	const emailBaseURL = "mailto:?"

	const pdfURL = `public/pdf/${doi}.pdf`

	const altPdfURL = `public/pdf/${doi}-alt.pdf`

	const facebookCustom = `${articleURL}${doi}`
	const facebookWebEncoded = encodeURIComponent(facebookCustom)
	const facebookURL = `${facebookBaseURL}${facebookWebEncoded}`

	const twitterCustom = `${title}. ${description} ${articleURL}${doi}`
	const twitterWebEncoded = encodeURIComponent(twitterCustom)
	const twitterURL = `${twitterBaseURL}${twitterWebEncoded}`

	const emailCustom = `subject=${title}&body=${description} ${articleURL}${doi}`
	const emailWebEncoded = encodeURIComponent(emailCustom)
	const emailURL = `${emailBaseURL}${emailWebEncoded}`

	return {
		pdfURL,
		altPdfURL,
		facebookURL,
		twitterURL,
		emailURL,
	}
}

export default generateSocialURLs

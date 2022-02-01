
const ChuckNorrisConfig: SmartMirror.IWidgetConfig = {
	name: 'chuck-norris',
	icon: 'fad fa-quote-left',
	helper: true,
	link: "https://senses-smartmirror.com",
	author: "Senses - Smart Mirror",
	version: "0.0.3",
	settings: [{
		name: "title",
		displayOnly: true,
		label: "Label",
		order: 1,
		type: 'text',
		description: "This widget will display random quotes from Chuck Norris. Fetched from the Chuck Norris API."
	}, {
		name: "header",
		label: "Widget Title",
		type: 'input',
		value: "Chuck Norris",
		description: "The header title of the widget."
	}, {
		name: "interval",
		label: "Interval",
		type: 'input',
		value: 60000,
		validation: { min: 5000, max: 600000 },
		description: "Specify the interval between showing a new quote (In <strong>milliseconds</strong>). Default is 1 minute."
	}]
}

module.exports = ChuckNorrisConfig;

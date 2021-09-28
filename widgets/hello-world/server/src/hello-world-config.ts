
const HelloWorldConfig: SmartMirror.IWidgetConfig = {
	name: 'hello-world',
	icon: 'fad fa-globe-europe',
	helper: true,
	link: "https://github.com/nickthesing/smart-mirror",
  author: "Smart Mirror",
	version: "0.0.7",
	settings: [{
		name: "title",
		displayOnly: true,
		label: "Hello World",
		order: 1,
		type: 'text',
		description: "This Hello World widget is an example on how to add more widgets to the Smart Mirror."
	}, {
		name: "header",
		label: "Widget Title",
		type: 'input',
		value: "Hello World",
		description: "The header title of the widget."
	}]
}

module.exports = HelloWorldConfig;

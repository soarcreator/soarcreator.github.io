if (!String.prototype.format)
{
	String.prototype.format = function()
	{
		var args = arguments;
		return this.replace(/{(\d+)}/g, function(match, number)
			{
				return typeof args[number] != 'undefined' ? args[number] : match;
			}
		);
	};
}

var menuItems = document.getElementsByTagName("nav")[0].getElementsByTagName("a");
var left = 0;
var kName = ['home', 'blog', 'projects', 'about', 'contact'];
var kColors = ['#1abc9c', '#e74c3c', '#3498db', '#9b59b6', '#e67e22'];
for (var i = 0; i < menuItems.length; ++i)
{
	var w = menuItems[i].offsetWidth;
	var css = 
	'nav .start-{0}, a:nth-child({1}):hover~.animation \
		{ \
			width: {2}px;\
			left: {3}px;\
			background-color: {4};\
		}'
	.format(kName[i], i + 1, w, left, kColors[i]);

	var style = document.createElement('style');
	style.appendChild(document.createTextNode(css));
	document.getElementsByTagName('head')[0].appendChild(style);
	left += w;
}
jquery.niceDate plugin
======================

It is a plugin to make dates more human readable. 12.12.2012 15:30 will become relative to 3 days ago. It supports i18n, 
currently english and sloven languages are supported. In the i18n folder is the demo for sloven language, so you can use the same schema 
to add another language.

Usage
-----

The config options:

<table>
	<tr>
		<th>Option</th><th>Default setting</th><th>Usage</th>
	</tr>
	<tr>
		<td>nowDateObject</td><td>new Date()</td><td>The current date object</td>
	</tr>
	<tr>
		<td>makeTimestamp</td><td>function</td><td>the function which takes text and return a JS Date object.</td>
	</tr>
	<tr>
		<td>pattern</td><td>/([0-3]?[0-9]).([0|1]?[0-9]).(\d{4})\s?(\d{2})?:?(\d{2})?$/</td><td>How to parse the date</td>
	</tr>
	<tr>
		<td>patternOrder</td><td>[ 3, 2, 1, 4, 5 ]</td><td>Date object parameters order</td>
	</tr>
	<tr>
		<td>dayOnly</td><td>false</td><td>If true, minutes or hours wont be shown. 20 minutes after will become today</td>
	</tr>
	<tr>
		<td>hoverShow</td><td>true</td><td>If true on hover the original date will be shown</td>
	</tr>
	<tr>
		<td>autoUpdateInterval</td><td>60000</td><td>Interval in milliseconds to update text. If 0 no update will be done.</td>
	</tr>
	<tr>
		<td>monthMessages</td><td>...</td><td>See i18n</td>
	</tr>
	<tr>
		<td>dayMessages</td><td>...</td><td>See i18n</td>
	</tr>
	<tr>
		<td>hourMessages</td><td>...</td><td>See i18n</td>
	</tr>
	<tr>
		<td>minMessages</td><td>...</td><td>See i18n</td>
	</tr>
</table>

The standart usage would be:

	$('.date').niceDate();
	$('.date').niceDate({autoUpdateInterval: 0}); // no auto update
	
To manually update the text you can use the data object:

	$('.date).each(function(){
		$(this).data('plugin_niceDate').update();
	});


i18n
----
To be written.

Changelog
---------

*	**v0.2** Added auto update. Rewritten the whole plugin after jquery plugin boilerplate. Added manual update function.
*	**v0.1** Freshly created

Demo available on http://maraz.org/demo/jquery-niceDate/ or the index.html file.
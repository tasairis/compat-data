
(function() {
	const { jsonp, progressp } = document.currentScript.dataset;
	const info = ({"date":"2024-04-16","skyrim":"1.6.1170"});
	let mcount = 0, mods = 7126, scount = 0, sources = 15;
	const ps = (["2023-4290285608","2021-305004688","2020-1180757651","2018-1206393470","2022-3034702921","2016-2885214449","2014-3384309543","2017-271217873","2015-2613401117","2019-51867596","2013-2802801456","2024-02-3549854768","2024-01-1753966181","recent-2756445655","2024-03-655246191"]).map(key =>
		import(`./${key}.js`).then(source =>
			(progressp && window[progressp]?.call(undefined, key, null, mcount += source.default.length, mods, ++scount, sources, source.default), source.default)
		).catch(error =>
			(progressp && window[progressp]?.call(undefined, key, error, mcount, mods, ++scount, sources, []), !progressp && console.error(error), [])
		)
	);
	Promise.all(ps)
		.then(sources => ({ ...info, data: sources.flat(), sources: sources.length }))
		.then(payload => window[jsonp]?.call(undefined, payload));
})();

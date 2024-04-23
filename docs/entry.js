
(function() {
	const { jsonp, progressp } = document.currentScript.dataset;
	const info = ({"date":"2024-04-23","skyrim":"1.6.1170"});
	let mcount = 0, mods = 7134, scount = 0, sources = 15;
	const ps = (["2023-2026563337","recent-2823851898","2020-2667489272","2018-1206393470","2022-913780974","2016-3093520698","2014-1867637677","2017-219970964","2021-1420474966","2015-2613401117","2019-51867596","2013-2328433910","2024-02-2666149415","2024-01-1753966181","2024-03-393051514"]).map(key =>
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

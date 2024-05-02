
(function() {
	const { jsonp, progressp } = document.currentScript.dataset;
	const info = ({"date":"2024-05-02","skyrim":"1.6.1170"});
	let mcount = 0, mods = 7145, scount = 0, sources = 16;
	const ps = (["2023-3266499636","2024-04-270774409","2020-2667489272","2018-1206393470","2022-600912801","2016-3093520698","2014-1867637677","2017-219970964","2021-1854838675","2015-2613401117","2019-2044365558","2013-2328433910","2024-02-1149878138","2024-01-1753966181","2024-03-2987355238","recent-2511405260"]).map(key =>
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

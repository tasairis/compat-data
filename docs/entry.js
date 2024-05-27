
(function() {
	const { jsonp, progressp } = document.currentScript.dataset;
	const info = ({"date":"2024-05-26","skyrim":"1.6.1170"});
	let mcount = 0, mods = 7184, scount = 0, sources = 27;
	const ps = (["2023-02-3374867911","2023-10-175964065","2024-04-1342592867","2023-12-3492535557","2020-4074646830","2018-1206393470","2022-1052466067","2016-3093520698","2014-1867637677","2017-219970964","2023-03-2259878547","2021-1854838675","2015-2613401117","2023-09-311624538","2019-2044365558","2023-08-3620283562","2023-01-585291607","2013-2328433910","2024-02-2954379218","2024-01-1474045157","2023-04-4175291736","2023-06-2473089773","2024-03-1364861245","2023-07-2789834621","2023-11-2995733303","2023-05-89304225","recent-1015834917"]).map(key =>
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

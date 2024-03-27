
(function() {
	const { jsonp, progressp } = document.currentScript.dataset;
	const info = ({"date":"2024-03-26","skyrim":"1.6.1170"});
	let mcount = 0, mods = 7085, scount = 0, sources = 14;
	const ps = (["2023-263719848","2021-3048252365","2020-2282780285","2018-1206393470","2022-931048267","2016-561067203","2014-4294275648","2017-900629776","2015-3980233592","2019-3387815489","2013-414531794","2024-02-2622607653","2024-01-2078560599","recent-1753008262"]).map(key =>
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

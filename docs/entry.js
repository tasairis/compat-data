
(function() {
	const { jsonp, progressp } = document.currentScript.dataset;
	const info = ({"date":"2024-07-16","skyrim":"1.6.1170"});
	let mcount = 0, mods = 7262, scount = 0, sources = 18;
	const ps = (["2023-892946261","2024-04-3696619960","2024-07-2601708757","2020-3085766360","2018-1792359184","2022-3417129592","2016-1025716833","2014-2617207860","2017-1031159780","2021-3037600050","2015-493416725","2024-05-875853524","2019-3408127083","2013-306518390","2024-02-932928972","2024-06-1901416842","2024-01-3144590497","2024-03-1588506561"]).map(key =>
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

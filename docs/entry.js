
(function() {
	const { jsonp, progressp } = document.currentScript.dataset;
	const info = ({"date":"2024-03-19","skyrim":"1.6.1170"});
	let mcount = 0, mods = 7070, scount = 0, sources = 14;
	const ps = (["2023-3203696941","2021-3048252365","2020-2282780285","2018-1206393470","2022-1241282484","2016-4284781878","2014-666214449","2017-1194892118","2015-901306485","2019-3016863612","2013-2889172304","2024-02-3696695430","2024-01-245591954","recent-1614850126"]).map(key =>
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

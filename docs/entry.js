
(function() {
	const { jsonp, progressp } = document.currentScript.dataset;
	const info = ({"date":"2024-03-14","skyrim":"1.6.1170"});
	let mcount = 0, mods = 7052, scount = 0, sources = 14;
	const ps = (["2023-4222232226","2021-1032610986","2020-2282780285","2018-3872997318","2022-1799031038","2016-2501429297","2014-1729027668","2017-1194892118","2015-3017351910","2019-3016863612","2013-2889172304","2024-02-2854628909","2024-01-1719873113","recent-2421200571"]).map(key =>
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

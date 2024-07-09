
(function() {
	const { jsonp, progressp } = document.currentScript.dataset;
	const info = ({"date":"2024-07-09","skyrim":"1.6.1170"});
	let mcount = 0, mods = 7246, scount = 0, sources = 18;
	const ps = (["2023-120844196","2024-04-615384759","2024-07-1176454436","2020-3085766360","2018-1792359184","2022-3417129592","2016-1782466585","2014-3102610853","2017-2231280285","2021-3037600050","2015-3201224448","2024-05-1110602439","2019-3408127083","2013-306518390","2024-02-4203674538","2024-06-2334675671","2024-01-3144590497","2024-03-43845336"]).map(key =>
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


(function() {
	const { jsonp, progressp } = document.currentScript.dataset;
	const info = ({"date":"2024-07-01","skyrim":"1.6.1170"});
	let mcount = 0, mods = 7235, scount = 0, sources = 18;
	const ps = (["2023-3197269810","2024-04-3143773357","2020-3085766360","2018-1802159540","2022-2357776522","2016-1782466585","2014-3069229387","2017-2231280285","2021-3368794180","2015-3201224448","2024-05-1342049875","2019-3408127083","2013-306518390","2024-02-2356355127","2024-06-3730100770","2024-01-150765630","2024-03-49177981","2024-07-2368722814"]).map(key =>
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

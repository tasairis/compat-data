
(function() {
	const { jsonp, progressp } = document.currentScript.dataset;
	const info = ({"date":"2024-07-23","skyrim":"1.6.1170"});
	let mcount = 0, mods = 7269, scount = 0, sources = 18;
	const ps = (["2023-3536717206","2024-04-1810654833","2024-07-2626193182","2020-3085766360","2018-1792359184","2022-37117125","2016-1704432360","2014-2499233388","2017-2169121319","2021-988632122","2015-194883186","2024-05-1394945218","2019-3408127083","2013-306518390","2024-02-932928972","2024-06-3275333830","2024-01-3144590497","2024-03-1229440252"]).map(key =>
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

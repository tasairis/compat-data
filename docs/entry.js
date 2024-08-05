
(function() {
	const { jsonp, progressp } = document.currentScript.dataset;
	const info = ({"date":"2024-08-04","skyrim":"1.6.1170"});
	let mcount = 0, mods = 7280, scount = 0, sources = 18;
	const ps = (["2023-1272374146","2024-04-772530374","2024-07-3777201595","2020-3085766360","2018-1792359184","2022-4269288474","2016-1823897352","2014-3793753074","2017-2169121319","2021-988632122","2015-671321292","2024-05-1526778993","2019-3408127083","2013-3383846658","2024-02-932928972","2024-06-1497116613","2024-01-4274843643","2024-03-1229440252"]).map(key =>
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

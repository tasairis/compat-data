
(function() {
	const { jsonp, progressp } = document.currentScript.dataset;
	const info = ({"date":"2024-04-02","skyrim":"1.6.1170"});
	let mcount = 0, mods = 7108, scount = 0, sources = 15;
	const ps = (["2023-2359510318","2021-2257353200","2020-2282780285","2018-1206393470","2022-3576218491","2016-3089888370","2014-580305339","2017-3243555216","2015-4154056527","2019-51867596","2013-1418670436","2024-02-1189169730","2024-01-1753966181","2024-03-353453677","recent-2482665663"]).map(key =>
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

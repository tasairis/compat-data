
(function() {
	const { jsonp, progressp } = document.currentScript.dataset;
	const info = ({"date":"2024-03-04","skyrim":"1.6.1170"});
	let mcount = 0, mods = 7032, scount = 0, sources = 14;
	const ps = (["2023-3107903261","2021-204568355","2020-3893824396","2018-1928252639","2022-3064686493","2016-743776187","2014-1133151675","2017-1483029516","2015-1256369343","2019-3590550184","2013-332065428","2024-02-2575260462","2024-01-1535937184","recent-2602844970"]).map(key =>
		import(`./${key}.js`).then(source =>
			(progressp && window[progressp]?.call(undefined, mcount += source.default.length, mods, ++scount, sources, source.default), source.default)
		)
	);
	Promise.all(ps)
		.then(sources => ({ ...info, data: sources.flat(), sources: sources.length }))
		.then(payload => window[jsonp]?.call(undefined, payload));
})();

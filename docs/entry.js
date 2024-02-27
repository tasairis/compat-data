
(function() {
	const { jsonp, progressp } = document.currentScript.dataset;
	const info = ({"date":"2024-02-27","skyrim":"1.6.1170"});
	let mcount = 0, mods = 7022, scount = 0, sources = 24;
	const ps = (["2023-02-871399892","2023-10-1950407518","2021-2249865003","2023-09-689764771","2023-12-63841581","2020-3893824396","2018-1928252639","2022-722260725","2016-3662845244","2014-1133151675","2017-1483029516","2023-03-245480664","2015-1256369343","2019-3590550184","2023-08-2510825819","2023-01-184114872","2013-332065428","recent-332631973","2024-01-6095044","2023-04-3645492458","2023-06-1223323933","2023-07-2356804323","2023-11-302793210","2023-05-1599145225"]).map(key =>
		import(`./${key}.js`).then(source =>
			(progressp && window[progressp]?.call(undefined, mcount += source.default.length, mods, ++scount, sources, source.default), source.default)
		)
	);
	Promise.all(ps)
		.then(sources => ({ ...info, data: sources.flat(), sources: sources.length }))
		.then(payload => window[jsonp]?.call(undefined, payload));
})();


(function() {
	const {jsonp, progressp} = document.currentScript.dataset;
	let mcount = 0, mods = 6549, scount = 0, sources = 18;
	const ps = (["2013-41341181","2014-219414563","2015-1075022723","2021-1345502108","2017-2450433850","2016-599330614","2018-3532492468","2019-1153622771","202302-2957623278","2022-1373048610","2020-4005442958","202306-484039407","recent-124132131","202305-3889922920","latest-2711940321","202304-1564597087","202301-3280086898","202303-1329801709"]).map(k => import(`./${k}.js`).then(m => [m.default, progressp && window[progressp].call(undefined, mcount += m.default.length, mods, ++scount, sources)][0]));
	Promise.all(ps).then(ds => ({ date: "2023-08-24", skyrim: "1.6.640", data: ds.flat(), sources })).then(d => window[jsonp](d));
})();

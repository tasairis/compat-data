
(function() {
	const {jsonp, progressp} = document.currentScript.dataset;
	let mcount = 0, mods = 6568, scount = 0, sources = 19;
	const ps = (["2013-3641101577","2014-3163946395","2015-3706573401","2021-2953476597","2017-962631614","2016-2187986467","2018-70542601","2019-1757606420","202302-2469522112","2022-1757401590","2020-3440829838","202306-2023164218","recent-996150979","latest-161805439","202304-598650010","202301-898355340","202305-2325082188","202303-812601498","202307-3020849407"]).map(k => import(`./${k}.js`).then(m => [m.default, progressp && window[progressp].call(undefined, mcount += m.default.length, mods, ++scount, sources)][0]));
	Promise.all(ps).then(ds => ({ date: "2023-09-04", skyrim: "1.6.640", data: ds.flat(), sources })).then(d => window[jsonp](d));
})();

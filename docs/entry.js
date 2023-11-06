
(function() {
	const {jsonp, progressp} = document.currentScript.dataset;
	let mcount = 0, mods = 6669, scount = 0, sources = 21;
	const ps = (["2013-3641101577","2014-268435538","2015-2153391498","2021-2353526132","2017-979926018","2016-1517013333","2018-3201991945","2019-3062032619","202302-2469522112","2022-744939338","2020-2672280938","202306-4037219624","202307-2740955144","202309-160284431","latest-2214582933","202308-493114989","202304-405030123","recent-3787484865","202301-898355340","202305-3280349435","202303-2680825493"]).map(k => import(`./${k}.js`).then(m => [m.default, progressp && window[progressp].call(undefined, mcount += m.default.length, mods, ++scount, sources)][0]));
	Promise.all(ps).then(ds => ({ date: "2023-11-06", skyrim: "1.6.640", data: ds.flat(), sources })).then(d => window[jsonp](d));
})();

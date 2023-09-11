
(function() {
	const {jsonp, progressp} = document.currentScript.dataset;
	let mcount = 0, mods = 6579, scount = 0, sources = 19;
	const ps = (["2013-3641101577","2014-3163946395","2015-3706573401","2021-1198791314","2017-962631614","2016-2187986467","2018-1014399542","2019-479868188","202302-2469522112","2022-2149047795","2020-2990600187","202306-1173075071","202307-3916613927","recent-304344223","latest-500300455","202304-2566541912","202301-898355340","202305-467598498","202303-812601498"]).map(k => import(`./${k}.js`).then(m => [m.default, progressp && window[progressp].call(undefined, mcount += m.default.length, mods, ++scount, sources)][0]));
	Promise.all(ps).then(ds => ({ date: "2023-09-11", skyrim: "1.6.640", data: ds.flat(), sources })).then(d => window[jsonp](d));
})();

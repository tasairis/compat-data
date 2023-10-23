
(function() {
	const {jsonp, progressp} = document.currentScript.dataset;
	let mcount = 0, mods = 6642, scount = 0, sources = 20;
	const ps = (["2013-3641101577","2014-1510474974","2015-2153391498","2021-3382242097","2017-979926018","2016-1517013333","2018-1407330123","2019-3062032619","202302-2469522112","2022-1810769952","2020-1788352046","202306-1068917612","202307-2768076569","recent-57823145","latest-4057413718","202308-2314200556","202304-2869106261","202301-898355340","202305-1378392864","202303-3596830965"]).map(k => import(`./${k}.js`).then(m => [m.default, progressp && window[progressp].call(undefined, mcount += m.default.length, mods, ++scount, sources)][0]));
	Promise.all(ps).then(ds => ({ date: "2023-10-23", skyrim: "1.6.640", data: ds.flat(), sources })).then(d => window[jsonp](d));
})();

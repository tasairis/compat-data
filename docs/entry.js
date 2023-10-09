
(function() {
	const {jsonp, progressp} = document.currentScript.dataset;
	let mcount = 0, mods = 6609, scount = 0, sources = 20;
	const ps = (["2013-3641101577","2014-1520954127","2015-2153391498","2021-2234749297","2017-1565003163","2016-3691334151","2018-3862113613","2019-3449733591","202302-2469522112","2022-3330071276","2020-1071706098","202306-3671491183","202307-663761860","recent-1748539568","202308-1411063824","202304-2869106261","latest-2455908299","202301-898355340","202305-4280720953","202303-812601498"]).map(k => import(`./${k}.js`).then(m => [m.default, progressp && window[progressp].call(undefined, mcount += m.default.length, mods, ++scount, sources)][0]));
	Promise.all(ps).then(ds => ({ date: "2023-10-09", skyrim: "1.6.640", data: ds.flat(), sources })).then(d => window[jsonp](d));
})();

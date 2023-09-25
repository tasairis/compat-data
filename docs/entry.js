
(function() {
	const {jsonp, progressp} = document.currentScript.dataset;
	let mcount = 0, mods = 6580, scount = 0, sources = 19;
	const ps = (["2013-3641101577","2014-2145674304","2015-3328205207","2021-1777149587","2017-2292702372","2016-3214249736","2018-570172706","2019-479868188","202302-2469522112","2022-4087479863","2020-1071706098","202306-582642981","202307-3410325262","latest-227044691","recent-1041785478","202304-2869106261","202301-898355340","202305-4280720953","202303-812601498"]).map(k => import(`./${k}.js`).then(m => [m.default, progressp && window[progressp].call(undefined, mcount += m.default.length, mods, ++scount, sources)][0]));
	Promise.all(ps).then(ds => ({ date: "2023-09-25", skyrim: "1.6.640", data: ds.flat(), sources })).then(d => window[jsonp](d));
})();

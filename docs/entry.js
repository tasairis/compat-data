
(function() {
	const {jsonp, progressp} = document.currentScript.dataset;
	let mcount = 0, mods = 6549, scount = 0, sources = 18;
	const ps = (["2013-3641101577","2014-3163946395","2015-74901740","2021-3040045098","2017-962631614","2016-402672462","2018-2362938101","2019-2946141669","202302-2469522112","2022-2652284296","2020-3377272991","202306-2099613136","recent-2835095750","202305-4050629420","latest-1793738412","202304-1202156850","202301-3619335518","202303-2335853440"]).map(k => import(`./${k}.js`).then(m => [m.default, progressp && window[progressp].call(undefined, mcount += m.default.length, mods, ++scount, sources)][0]));
	Promise.all(ps).then(ds => ({ date: "2023-08-24", skyrim: "1.6.640", data: ds.flat(), sources })).then(d => window[jsonp](d));
})();

// Lists every source key used in the data files that is missing from S. Run: node check-sources.js
const vm=require('vm'),fs=require('fs');
const ctx={window:{}};ctx.window=ctx;vm.createContext(ctx);
['d0.js','d0b.js','s1.js','s2.js','s3.js','plans.js','leaders.js','cost.js','cost2.js','pop.js'].forEach(f=>vm.runInContext(fs.readFileSync(f,'utf8'),ctx,{filename:f}));
let checked=0;const S=vm.runInContext('S',ctx),miss=new Map();
(function walk(o,p){if(Array.isArray(o)){if(/\.(src|s)$/.test(p)&&o.every(x=>typeof x==='string'))o.forEach(k=>{checked++;if(!S[k])miss.set(k,(miss.get(k)||[]).concat(p))});else o.forEach((x,i)=>walk(x,p+'['+i+']'));}
else if(o&&typeof o==='object')for(const k in o)walk(o[k],p+'.'+k);})({STOPS:ctx.STOPS,PLANS:ctx.PLANS,LEADERS:ctx.LEADERS,COST:ctx.COST,POP:ctx.POP},'');
console.log(checked+" keys checked, "+Object.keys(S).length+' sources defined');
if(miss.size){miss.forEach((v,k)=>console.log('MISSING '+k+' in '+v.slice(0,3).join(', ')));process.exit(1);}console.log('all source keys resolve');

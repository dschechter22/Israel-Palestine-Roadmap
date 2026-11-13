// Human cost, part 2: more kinds of harm, and low-fatality events.
Object.assign(S,{
  unosat:{t:"UNOSAT Gaza Strip comprehensive damage assessment, 11 Oct 2025 (UN summary)",u:"https://www.un.org/unispal/document/unosat-gaza-strip-damage-assessment-31oct25/",k:"UN record"},
  prisoners:{t:"Arab News: Over 10,000 Palestinians held in Israeli jails (Jul 2025, citing prisoner advocacy groups)",u:"https://www.arabnews.pk/node/2607390",k:"News",side:"figures from Palestinian prisoner groups"},
  hamoked:{t:"HaMoked: Israel Prison Service figures on Palestinian prisoners",u:"https://new.hamoked.org/prisoners-charts.php",k:"Rights group data",side:"Israeli human rights group"},
  isrdisp:{t:"Wikipedia: Displacement of Israelis after the October 7 attacks",u:"https://en.wikipedia.org/wiki/Displacement_of_Israelis_after_the_October_7_attacks",k:"Reference"},
  ocha_wb:{t:"UN OCHA West Bank snapshot, 7 Oct 2023 to 31 Dec 2024",u:"https://www.ochaopt.org/sites/default/files/West_Bank_info-graphic_13_January_2025.pdf",k:"UN record"},
  hrw_rafah:{t:"Human Rights Watch: Despite Gaza pullout plan, home demolitions expand (Razing Rafah, 2004)",u:"https://www.hrw.org/news/2004/10/17/israel-despite-gaza-pullout-plan-home-demolitions-expand",k:"Rights group"},
  ict:{t:"International Institute for Counter-Terrorism (Israel): Israeli casualties 2000-2005",k:"Research center",side:"Israeli"}
});

// Extra metrics per conflict block. inj = injured, disp = forced from homes, arr = arrested, held or taken hostage, homes = homes destroyed.
// n = number for the chart (null = no reliable single figure); x = text shown.
const MX={
 "1929 riots":{inj:{a:{n:340,x:"about 340 Jews"},b:{n:230,x:"about 230 Arabs"}}},
 "1936-1939 Arab Revolt":{arr:{b:{n:null,x:"thousands held without trial by Britain"}},homes:{b:{n:null,x:"hundreds or more homes blown up as punishment"}}},
 "1947-1949 war":{disp:{a:{n:null,x:"Jews driven from areas Arab forces took, such as Jerusalem's Old City; about 800,000 Jews later left Arab countries over two decades"},b:{l:"Palestinians",n:700000,x:"about 700,000 Palestinians"}},homes:{b:{l:"Palestinians",n:null,x:"about 400-500 villages emptied, most later demolished"}}},
 "1967 Six-Day War":{disp:{b:{l:"Palestinians and Syrians",n:400000,x:"about 300,000 Palestinians and about 100,000 Syrians from the Golan"}},homes:{b:{l:"Palestinians",n:null,x:"three villages near Latrun and Jerusalem's Moroccan Quarter demolished"}}},
 "1982 Lebanon war":{disp:{b:{n:null,x:"hundreds of thousands in Lebanon"}},arr:{b:{n:null,x:"thousands of men held at Israel's Ansar camp"}}},
 "1987-1993 First Intifada":{inj:{b:{n:130000,x:"over 130,000 Palestinians (estimates)"}},arr:{b:{n:175000,x:"about 175,000 Palestinians arrested"}},homes:{b:{n:2500,x:"about 2,500 homes demolished"}}},
 "2000-2005 Second Intifada":{inj:{a:{n:8300,x:"about 8,300 Israelis (about 5,700 civilians)"},b:{n:null,x:"tens of thousands of Palestinians"}},disp:{b:{n:16000,x:"at least 16,000 left homeless in Gaza alone (Human Rights Watch, 2000-2004)"}},arr:{b:{n:null,x:"thousands"}},homes:{b:{n:4100,x:"about 4,100 Palestinian homes demolished (B'Tselem)"}}},
 "2008-2009 Gaza war":{inj:{b:{n:5300,x:"over 5,000 Palestinians"}},homes:{b:{n:null,x:"thousands of homes destroyed or damaged"}}},
 "2012 Gaza war":{inj:{a:{n:240,x:"about 240"},b:{n:1000,x:"about 1,000"}}},
 "2014 Gaza war":{inj:{a:{n:1600,x:"about 1,600"},b:{n:11000,x:"about 11,000"}},disp:{b:{n:500000,x:"up to about 500,000 at the peak"}},homes:{b:{n:18000,x:"about 18,000 housing units destroyed or badly damaged"}}},
 "2018-2019 Gaza border protests":{inj:{b:{n:6000,x:"over 6,000 shot with live fire"}}},
 "2021 Gaza war":{inj:{a:{n:null,x:"hundreds"},b:{n:2000,x:"about 2,000"}}},
 "October 7, 2023":{inj:{a:{n:null,x:"thousands"}},disp:{a:{n:225000,x:"about 200,000-250,000 Israelis evacuated from the south and north"}},arr:{a:{n:251,x:"about 250 people taken hostage into Gaza"}}},
 "2023-2025 Gaza war":{inj:{b:{n:170000,x:"about 170,000"}},disp:{b:{n:1900000,x:"about 1.9 million, around 90% of Gazans, many several times"}},arr:{b:{n:10800,x:"about 10,800 Palestinians held in Israeli prisons by July 2025 (3,629 without charge), not counting Gazans held in army camps"}},homes:{b:{n:320000,x:"about 320,000 housing units damaged; about 81% of all structures (UN satellite data, Oct 2025)"}}},
 "Gaza after the ceasefire (to Oct 2026)":{inj:{b:{n:5281,x:"about 5,281"}}},
 "2026 Iran war":{inj:{a:{n:8661,x:"about 7,840 in Israel and 820 US personnel"},b:{n:27170,x:"27,170 (Iranian government count)"}}},
 "2026 Lebanon war":{disp:{b:{n:1200000,x:"about 1.2 million"}},homes:{b:{n:11000,x:"more than 11,000 buildings destroyed (UN)"}}}
};
COST.blocks.forEach(b=>{Object.assign(b,MX[b.t]||{});});
// New blocks
COST.blocks.splice(COST.blocks.findIndex(b=>b.t==="2023-2025 Gaza war")+1,0,
 {t:"West Bank after Oct 7 (to Dec 2024)",a:{l:"Israelis",n:50,x:"50, including 18 soldiers or police"},b:{l:"Palestinians",n:1004,x:"1,004, including 213 children (976 by Israeli forces, 21 by settlers)"},w:"UN OCHA",
  inj:{a:{n:317,x:"317"},b:{n:16104,x:"16,104"}},disp:{b:{n:8758,x:"8,758, mostly from home demolitions and settler attacks"}},homes:{b:{n:2946,x:"about 2,950 structures destroyed"}},note:"OCHA also recorded 1,860 settler attacks causing casualties or damage."},
 {t:"2023-2024 Israel-Hezbollah war",a:{l:"Israelis",n:null,x:"dozens of soldiers and civilians"},b:{l:"In Lebanon",n:4000,x:"more than 4,000 (Lebanese health ministry)"},w:"Lebanese health ministry; Israeli government",
  inj:{b:{n:16000,x:"over 16,000"}},disp:{a:{n:60000,x:"about 60,000 Israelis evacuated from the north, many for over a year"},b:{n:1200000,x:"up to about 1.2 million Lebanese at the peak"}}}
);
const SRCX={"West Bank after Oct 7 (to Dec 2024)":"UN OCHA"};

// Extra fields for existing events (by title)
const EX={
 "Lydda and Ramla":{dp:"About 50,000-70,000 expelled"},
 "The 1948 war (total)":{dp:"About 700,000 Palestinians fled or were expelled"},
 "Six-Day War (total)":{dp:"About 300,000 Palestinians and about 100,000 Syrians"},
 "First Intifada":{ar:"About 175,000 Palestinians arrested",hm:"About 2,500 homes demolished"},
 "Second Intifada (total)":{hm:"About 4,100 Palestinian homes demolished"},
 "Gaza war (Protective Edge)":{dp:"Up to about 500,000 at the peak",hm:"About 18,000 housing units destroyed or badly damaged"},
 "Hamas-led attack on southern Israel":{ar:"About 250 taken hostage",dp:"About 200,000-250,000 Israelis evacuated from border areas"},
 "Gaza war (total)":{dp:"About 1.9 million, around 90% of Gazans",hm:"About 320,000 housing units damaged (UN, Oct 2025)",ar:"Thousands of Gazans detained; about 10,800 Palestinians in Israeli prisons by July 2025"},
 "Israel-Hezbollah war":{dp:"About 60,000 Israelis from the north and up to about 1.2 million Lebanese"},
 "Lebanon war":{dp:"About 1.2 million",hm:"More than 11,000 buildings destroyed"}
};
COST.events.forEach((e,i)=>{e.kn=COST.kn[i];Object.assign(e,EX[e.t]||{});});
if(EX["Gaza war (total)"]){const g=COST.events.find(e=>e.t==="Gaza war (total)");if(g)g.src=g.src.concat(["unosat","prisoners"]);}
const oct7=COST.events.find(e=>e.t==="Hamas-led attack on southern Israel");if(oct7)oct7.src=oct7.src.concat(["isrdisp"]);

// New events, mostly low-fatality but high-impact. nl = not mainly about deaths.
COST.events.push(
{d:"June 10-11, 1967",t:"Moroccan Quarter demolished",cat:"israel",nl:true,kn:650,by:"Israeli authorities, right after capturing the Old City",vic:"Residents of the centuries-old neighborhood next to the Western Wall",k:"",dp:"About 100 families",hm:"The whole quarter, to create the Western Wall plaza",n:"Residents were given hours to leave.",src:["segev67"]},
{d:"June 1967",t:"Latrun villages emptied and bulldozed",cat:"israel",nl:true,kn:10000,by:"Israeli army",vic:"Residents of Imwas, Yalo and Beit Nuba",k:"",dp:"About 10,000 people",hm:"All three villages; Canada Park now stands on the land",n:"They were never allowed to return.",src:["segev67","morrisRV"]},
{d:"March 30, 1976",t:"Land Day",cat:"israel",kn:6,by:"Israeli police and army",vic:"Arab citizens of Israel protesting land confiscation in the Galilee",k:"6",i:"About 100",ar:"Hundreds",n:"Marked every year since by Palestinians and Arab citizens of Israel.",src:["black","cohenH"]},
{d:"December 17, 1992",t:"Mass deportation to Lebanon",cat:"israel",nl:true,kn:415,by:"Israeli government, after Hamas killed a border policeman",vic:"Hamas and Islamic Jihad members and suspected supporters",k:"",ar:"415 deported without trial to southern Lebanon",n:"They spent months in a tent camp; many returned within a year. Hezbollah reportedly trained some of them.",src:["levittH","tamimi"]},
{d:"2000-2004",t:"Mass home demolitions in Rafah",cat:"israel",nl:true,kn:16000,by:"Israeli army, clearing land along the Gaza-Egypt border",vic:"Palestinian families in Rafah",k:"",dp:"About 16,000 people left homeless in Gaza (Human Rights Watch)",hm:"Over 200 homes in May 2004 alone; over 10% of Rafah's people lost their homes",n:"Israel said the demolitions were needed to find and destroy smuggling tunnels.",src:["hrw_rafah"]},
{d:"August 2005",t:"Gaza disengagement: settlers removed",cat:"intra",nl:true,kn:8000,by:"Israeli government and army, against its own citizens",vic:"Israeli settlers in Gaza and four northern West Bank settlements",k:"",dp:"About 8,000 Israelis",hm:"21 Gaza settlements demolished",n:"Some settlers were dragged from their homes. It remains a deep trauma for Israel's religious right.",src:["shapira"]},
{d:"October 2015 - 2016",t:"Wave of stabbings and car-rammings",cat:"war",kn:270,by:"Mostly young Palestinians acting alone; Israeli forces and armed civilians",vic:"Israeli civilians and soldiers; Palestinian attackers and bystanders",k:"Roughly 40 Israelis and over 200 Palestinians, many of them attackers (approximate)",n:"Started amid tension over the Temple Mount. Israel was criticized for some killings of attackers who were already subdued.",src:["news26"]},
{d:"July 2017",t:"Al-Aqsa metal detector crisis",cat:"war",nl:true,kn:200,by:"Arab-Israeli gunmen; Israeli police; a Palestinian attacker in Halamish",vic:"Two Israeli police officers killed at the site; Palestinian protesters; an Israeli family",k:"2 Israeli police officers, 3 Palestinian protesters, 3 Israelis in Halamish",i:"Hundreds",n:"After the shooting, Israel put metal detectors at the compound's gates. Muslims refused to enter and prayed in the streets in mass protest until they were removed.",src:["news26"]},
{d:"2022",t:"Masafer Yatta eviction ruling",cat:"israel",nl:true,kn:1000,by:"Israel's Supreme Court, upholding an army firing zone",vic:"About 1,000 Palestinians in hamlets south of Hebron",k:"",dp:"About 1,000 at risk of eviction",hm:"Repeated demolitions of homes, schools and water cisterns",n:"The documentary No Other Land, about the area, won an Oscar in 2025.",src:["btselem2"]},
{d:"May 7-10, 2021",t:"Al-Aqsa raids and Sheikh Jarrah protests",cat:"israel",nl:true,kn:330,by:"Israeli police",vic:"Palestinian worshippers and protesters at Al-Aqsa and in Sheikh Jarrah",k:"",i:"Hundreds of Palestinians and dozens of police",ar:"Hundreds",n:"Hamas fired rockets at Jerusalem on May 10, starting the 11-day Gaza war.",src:["news26"]},
{d:"April 5, 2023",t:"Al-Aqsa raid during Ramadan",cat:"israel",nl:true,kn:350,by:"Israeli police",vic:"Palestinians who stayed overnight in the prayer hall",k:"",i:"Dozens",ar:"More than 350",n:"Police said those inside were rioters with fireworks and stones; Palestinians said most were worshippers. Video showed beatings. Rockets followed from Gaza and Lebanon. Hamas later named its October 7 attack \"Al-Aqsa Flood.\"",src:["un_timeline","news26"]},
{d:"October 2023 - December 2024",t:"West Bank after October 7",cat:"war",kn:1054,by:"Israeli forces and settlers; Palestinian attackers",vic:"Palestinians and Israelis in the West Bank",k:"1,004 Palestinians and 50 Israelis",i:"16,104 Palestinians and 317 Israelis",dp:"8,758 Palestinians",hm:"About 2,950 structures destroyed",n:"OCHA recorded 1,860 settler attacks that caused casualties or damage.",src:["ocha_wb"]},
{d:"October 2023 - 2025",t:"Mass detention after October 7",cat:"israel",nl:true,kn:10800,by:"Israeli army and prison service",vic:"Palestinians from Gaza and the West Bank",k:"",ar:"About 10,800 held in Israeli prisons by July 2025, including 3,629 without charge, plus Gazans held in army camps",n:"Israeli and international rights groups documented abuse in custody, especially at the Sde Teiman camp, where several soldiers were indicted. Israel says detainees are treated lawfully.",src:["prisoners","hamoked"]},
{d:"January 2025",t:"Operation Iron Wall in West Bank refugee camps",cat:"israel",nl:true,kn:40000,by:"Israeli army",vic:"Residents of Jenin, Tulkarm and Nur Shams camps",k:"",dp:"About 40,000 people",hm:"Hundreds of buildings demolished",n:"The largest displacement in the West Bank since 1967.",src:["news26"]}
);
const MON={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};
const key=d=>{const y=parseInt((d.match(/\d{4}/)||["0"])[0],10);const m=d.toLowerCase().match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/);const yi=d.indexOf(String(y));const mi=m?d.toLowerCase().indexOf(m[0]):99;return y+((m&&mi<yi)?MON[m[0]]/12:0);};
COST.events=COST.events.map((e,i)=>[e,i]).sort((x,y)=>key(x[0].d)-key(y[0].d)||x[1]-y[1]).map(x=>x[0]);
// Side labels that must cover every kind of harm shown
{const six=COST.blocks.find(b=>b.t==="1967 Six-Day War");if(six)six.b.l="Arab side";}

// Links for every source. Official reports and data get direct links; books link to an Open Library search for that title.
(function(){
 const U={
  kahan:"https://www.jewishvirtuallibrary.org/the-kahan-commission-of-inquiry",
  mitchellRep:"https://www.un.org/unispal/document/auto-insert-200482",
  goldstone:"https://digitallibrary.un.org/record/666096",
  palmer:"https://digitallibrary.un.org/record/720841",
  shaw:"https://en.wikipedia.org/wiki/Shaw_Commission",
  haycraft:"https://www.archive.org/download/palestinedisturb00grearich/palestinedisturb00grearich_bw.pdf",
  ocha:"https://www.ochaopt.org/data/casualties",
  coi14:"https://digitallibrary.un.org/record/800768",
  coi18:"https://reliefweb.int/report/occupied-palestinian-territory/report-independent-international-commission-inquiry-protests",
  shinbet:"https://www.jewishvirtuallibrary.org/number-of-terrorism-fatalities-in-israel",
  ict:"https://en.wikipedia.org/wiki/Civilian_casualties_in_the_Second_Intifada",
  idfdata:"https://en.wikipedia.org/wiki/Israel_casualties_of_war",
  gazamoh:"https://www.arabnews.pk/node/2404506",
  lebmoh:"https://aljazeera.com/news/2026/9/6/nearly-9000-killed-in-israeli-attacks-on-lebanon-since-2023",
  news26:"https://en.wikipedia.org/wiki/2026_Iran_war",
  bueno:"https://econpapers.repec.org/RePEc:wly:amposc:v:49:y:2005:i:3:p:515-530"
 };
 const NOTE={shaw:"summary page; the report itself is British Command Paper 3530",shinbet:"compiles Shin Bet figures",ict:"summary page citing ICT data",idfdata:"summary page compiling official Israeli figures",gazamoh:"AP explainer on how the ministry counts",lebmoh:"latest ministry totals as reported by Al Jazeera, Sept 2026",news26:"summary page; individual stories are linked where used",kahan:"full text"};
 Object.entries(U).forEach(([k,u])=>{if(S[k]&&!S[k].u){S[k].u=u;if(NOTE[k])S[k].lk=NOTE[k];}});
 Object.values(S).forEach(s=>{if(s.u)return;const m=s.t.match(/^(.*?), (.*?)(?: \((\d{4})[^)]*\))?$/);const q=m?m[2].replace(/'/g,"")+" "+m[1].split(" and ")[0]:s.t;s.u="https://openlibrary.org/search?q="+encodeURIComponent(q);s.lk="library listing";});
})();
// Sources behind each conflict's figures
(function(){
 const B={"1920-1921 riots":["haycraft","segevOPC"],"1929 riots":["shaw","segevOPC"],"1936-1939 Arab Revolt":["khalidi","morrisRV","segevOPC"],"1947-1949 war":["morrisRef","osh_48","un_timeline"],"1949-1956 border fighting":["morrisBorder"],"1967 Six-Day War":["osh_67","oren","segev67"],"1967-1970 War of Attrition":["morrisRV","shlaim"],"1973 Yom Kippur War":["osh_73","rabinovich"],"1982 Lebanon war":["csm_leb","merip_leb","palquest_leb","kahan"],"1987-1993 First Intifada":["btselem1","encyc_int1","jmcc_int1","jvl_int1"],"2000-2005 Second Intifada":["btselem2","shinbet","ict","hrw_rafah"],"2008-2009 Gaza war":["goldstone","ocha"],"2012 Gaza war":["ocha"],"2014 Gaza war":["coi14","ocha"],"2018-2019 Gaza border protests":["coi18"],"2021 Gaza war":["ocha"],"October 7, 2023":["idfdata","isrdisp","un_patten"],"2023-2025 Gaza war":["qna_gaza","aap_gaza","gazamoh","ynet_idf","unosat","prisoners","hamoked"],"West Bank after Oct 7 (to Dec 2024)":["ocha_wb"],"2023-2024 Israel-Hezbollah war":["lebmoh","idfdata"],"Gaza after the ceasefire (to Oct 2026)":["toi_gaza","aap_gaza"],"2026 Iran war":["wiki_iran26"],"2026 Lebanon war":["lebmoh","nar_leb","aj_leb"]};
 COST.blocks.forEach(b=>{b.src=(B[b.t]||[]).filter(k=>S[k]);});
})();

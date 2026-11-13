// Population by religion, shown when you hover the Timeline map. Only counts that were read from a source and sum correctly are listed.
// POP.snap[year] = one count. j Jews, m Muslims, c Christians, o others (Druze etc.). POP.stops[stopId] = which counts to show, in order.
// Scope matters: these are counts for ALL of Palestine as the source defines it, not for the part of the map under the cursor.
Object.assign(S,{
 popjvl:{t:"Jewish Virtual Library: Population of Israel/Palestine by Religion, 1553 to present",u:"https://www.jewishvirtuallibrary.org/population-of-israel-palestine-1553-present",k:"reference",side:"pro-Israel site, table marked \"figures are not exact\"",lk:"table of estimates and census counts"},
 popc1931:{t:"1931 census of Palestine (Wikipedia, citing E. Mills, Census of Palestine 1931)",u:"https://en.wikipedia.org/wiki/1931_census_of_Palestine",k:"reference",lk:"encyclopedia summary of the British census"},
 popvs45:{t:"Village Statistics, 1945 (Wikipedia, citing the Government of Palestine)",u:"https://en.wikipedia.org/wiki/Village_Statistics,_1945",k:"reference",lk:"encyclopedia summary of a British Mandate estimate"}
});
window.POP={
 scopeAll:"All of Palestine as the source defines it, not only the spot you are pointing at.",
 snap:{
  "1914":{y:"About 1914",who:"Estimate in a table on the Jewish Virtual Library",scope:"Ottoman Palestine. The source does not give its borders.",m:525000,j:94000,c:70000,cLabel:"Christians and others",
   note:"Estimates for this year vary a lot. The source calls its Muslim column \"all Arabs, including some Christians\", and its Jewish figure is higher than some other estimates (for example, a count of Jews who were Ottoman subjects was about 38,800).",src:["popjvl"]},
  "1922":{y:"1922",who:"British Mandate census, 23 October 1922",m:590890,j:83794,c:73024,o:9474,src:["popjvl"]},
  "1931":{y:"1931",who:"British Mandate census, 18 November 1931",m:759712,j:174610,c:91398,o:10101,src:["popjvl","popc1931"]},
  "1945":{y:"1945",who:"British Mandate government estimate (Village Statistics, 1945). A rough estimate, not a census.",m:1061270,j:553600,c:135550,o:14100,src:["popjvl","popvs45"]},
  "1947":{y:"1947",who:"Estimate in a table on the Jewish Virtual Library",m:1181000,j:630000,c:143000,
   note:"The source calls its Muslim column \"all Arabs, including some Christians\", so the Muslim and Christian lines overlap a little. Its own stated total (1,970,000) is 16,000 higher than these three lines add up to.",src:["popjvl"]}
 },
 stops:{ottoman:["1914"],ww1:["1914"],mandate:["1922","1931"],revolt:["1931","1945"],ww2:["1945"],postwar:["1945","1947"],partition:["1947"],civilwar:["1947"],statehood:["1947"]}
};

const {zihom} = require("./zihom")
const {words:[emptyEntry1]} = require("./empty.min")

const zo2z = zihom
  .map(([om,zizi])=>({
    ...emptyEntry1,
    entry:{id:NaN,form:om},
    translations:[{title:"zi",forms:zizi}]
  }))

const z2zo = zihom
  .map(([om,zizi])=>zizi)
  .reduce((a,c)=>a.concat(c)) //.flat()
  .reduce((acc_set,zi,idx,srcarr)=>
    idx < srcarr.length-1 ?
      acc_set.add(zi)
      : Array.from(acc_set.add(zi))
  ,new Set()) // unique
  .sort()
  .map(zi=>({
    zi,
    omhom:
      zihom.filter(([om,zizi])=>
        zizi.some(zi_x=>zi_x==zi)
      ).map(([om,_])=>om)
  }))
  .map(({zi,omhom})=>({
    ...emptyEntry1,
    entry:{id:NaN,form:zi},
    translations:[{title:"om",forms:omhom}]
  }))

const zihom_zpdo_otmjson = {
  words: [
    ...zo2z,...z2zo
  ].map((v,i)=>({
    ...v,entry:{id:i+1,form:v.entry.form}
  }))
}
console.info(
  JSON.stringify(zihom_zpdo_otmjson,null,2)
)

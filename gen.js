const {zihom} = require("./zihom")

//const zo2z = zihom.map()

const z2zo = zihom
  .map(([om,zizi])=>zizi.map(zi=>[zi,om]))
  .reduce((a,c)=>a.concat(c)) //.flat()
  .sort(([zi0,om0],[zi1,om1])=>
    zi0 == zi1 ?
      om0 < om1 ? -1 : 1
    : zi0 < zi1 ? -1 : 1
  )
  .reduce((a,[c_zi,c_om])=>
    a.length && a[a.length-1][0] == c_zi ?
      a.slice(0,a.length-1).concat([a[a.length-1].concat([c_om])])
      : a.concat([[c_zi,c_om]])
  ,[])
  .map(([zi,...omhom])=>({zi,omhom}))
  //.map()

console.info(z2zo)

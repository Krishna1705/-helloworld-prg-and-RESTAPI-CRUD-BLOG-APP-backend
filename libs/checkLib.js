let trim=(x)=>{
    let value=String(x)
    return value.replace(/^\s+|\s+$/gm, '')
}

let isEmpty=(value)=>{
    if(value===null || value===undefined || value.length===0 ||trim(value)==='')
    {
      return true
    }else{
          return false
         }
}

module.exports={
    isEmpty:isEmpty
}
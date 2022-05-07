
async function apical(url) {
    let res=await fetch(url)
    let data=await res.json()
    return data;
}
export{apical}
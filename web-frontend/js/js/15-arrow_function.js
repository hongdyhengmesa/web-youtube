const toProperCase = (nameUser) =>{
    return nameUser.charAt(0).toUpperCase() + nameUser.slice(1).toLowerCase();
}
console.log(toProperCase("mEsA"));
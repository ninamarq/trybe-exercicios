"use strict";
const convert = (valor, base) => {
    let Conversão;
    (function (Conversão) {
        Conversão[Conversão["km"] = 1000] = "km";
        Conversão[Conversão["hm"] = 100] = "hm";
        Conversão[Conversão["dam"] = 10] = "dam";
        Conversão[Conversão["m"] = 1] = "m";
        Conversão[Conversão["dm"] = 0.1] = "dm";
        Conversão[Conversão["cm"] = 0.01] = "cm";
        Conversão[Conversão["mm"] = 0.001] = "mm";
    })(Conversão || (Conversão = {}));
    return Conversão[base] * valor + 'm';
};
console.log(convert(56, 'dm'));

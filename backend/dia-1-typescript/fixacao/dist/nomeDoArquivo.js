"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Domingo"] = 1] = "Domingo";
    WeekDays[WeekDays["Segunda"] = 2] = "Segunda";
    WeekDays[WeekDays["Ter\u00E7a"] = 3] = "Ter\u00E7a";
    WeekDays[WeekDays["Quarta"] = 4] = "Quarta";
    WeekDays[WeekDays["Quinta"] = 5] = "Quinta";
    WeekDays[WeekDays["Sexta"] = 6] = "Sexta";
    WeekDays[WeekDays["S\u00E1bado"] = 7] = "S\u00E1bado";
})(WeekDays || (WeekDays = {}));
console.log(WeekDays);

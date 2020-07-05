if(!sessionStorage.getItem("lang")){sessionStorage.setItem("lang", "TH");}
var app = {};
const $Config = {
    appName: 'MyProfile',
    contactPath: location.hostname,
    baseLang: [{shortName: 'TH', fullNameEn: 'Thailand'}, {shortName: 'EN', fullNameEn: 'English'}]
};


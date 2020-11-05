export default function GetFlagUrlByLanguage(lang, size) {
    let code = lang;
    if(lang == 'ja') code = 'jp'
    else if (lang == 'ko') code = 'kr'
    else code = 'us'
    return `https://www.countryflags.io/${code}/flat/${size}.png`;
}

const languageTable = {
    "en-US": {
        weekNamesConfig: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    },
    "uk-UA": {
        weekNamesConfig: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
    },
    "ko-KR": {
        weekNamesConfig: ['월', '화', '수', '목', '금', '토', '일'], // Korean (Korea)
    },
    "fr-FR": {
        weekNamesConfig: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'], // French (France)
    },
    "de-DE": {
        weekNamesConfig: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'], // German (Germany)
    },
    "id-ID": {
        weekNamesConfig: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'], // Indonesian
    },
    "pl-PL": {
        weekNamesConfig: ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb', 'Nd'], // Polish (Poland)
    },
    "it-IT": {
        weekNamesConfig: ['Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa', 'Do'], // Italian (Italy)
    },
    "ja-JP": {
        weekNamesConfig: ['月', '火', '水', '木', '金', '土', '日'], // Japanese (Japan)
    },
    "th-TH": {
        weekNamesConfig: ['จ', 'อ', 'พ', 'พ', 'ศ', 'ส', 'อา'], // Thai
    },
    "ar-EG": {
        weekNamesConfig: ['ا', 'ث', 'أ', 'خ', 'ج', 'س', 'ح'], // Arabic (Egypt)
    },
    "vi-VN": {
        weekNamesConfig: ['Th', 'Ba', 'Tư', 'Năm', 'Sa', 'Bảy', 'CN'], // Vietnamese
    },
    "pt-PT": {
        weekNamesConfig: ['Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa', 'Do'] // Portuguese
    },
    "nl-NL": {
        weekNamesConfig: ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'], // Dutch
    },
    "tr-TR": {
        weekNamesConfig: ['Pz', 'Pt', 'Sa', 'Ç', 'Pe', 'Cu', 'Pz'], // Turkish (Turkey)
    },
    "iw-IL": {
        weekNamesConfig: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'], // Hebrew (Israel)
    },
    "pt-BR": {
        weekNamesConfig: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'], // Portuguese (Brazil)
    },
    "ro-RO": {
        weekNamesConfig: ['Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ', 'Du'], // Romanian
    },
    "cs-CZ": {
        weekNamesConfig: ['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'], // Czech
    },
    "el-GR": {
        weekNamesConfig: ['Δ', 'Τ', 'Τ', 'Π', 'Π', 'Σ', 'Κ'], // Greek
    },
    "sr-RS": {
        weekNamesConfig: ['Po', 'Ut', 'Sr', 'Čt', 'Pe', 'Sub', 'Ned'], // Serbian (Latin)
    },
    "ca-ES": {
        weekNamesConfig: ['Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds', 'Dg'], // Catalan
    },
    "fi-FI": {
        weekNamesConfig: ['Ma', 'Ti', 'Ke', 'To', 'Pe', 'La', 'Su'], // Finnish
    },
    "nb-NO": {
        weekNamesConfig: ['Ma', 'Ti', 'On', 'To', 'Fr', 'Lø', 'Sø'], // Norwegian
    },
    "da-DK": {
        weekNamesConfig: ['Ma', 'Ti', 'On', 'To', 'Fr', 'Lø', 'Sø'], // Danish
    },
    "sv-SE": {
        weekNamesConfig: ['Må', 'Ti', 'On', 'To', 'Fr', 'Lö', 'Sö'], // Swedish
    },
    "hu-HU": {
        weekNamesConfig: ['H', 'K', 'Sze', 'Cs', 'P', 'Szo', 'V'], // Hungarian
    },
    "ms-MY": {
        weekNamesConfig: ['Is', 'Se', 'Ra', 'Ke', 'Ju', 'Sa', 'Ah'], // Malay
    },
    "sk-SK": {
        weekNamesConfig: ['Po', 'Ut', 'St', 'Št', 'Pi', 'So', 'Ne'], // Slovakian
    },
    "hi-IN": {
        weekNamesConfig: ['सो', 'मं', 'बु', 'गु', 'शु', 'शा', 'रव'], // Hindi
    }
};


export function getLangTable() {
    const langUtils = new DeviceRuntimeCore.HmUtils.Lang(DeviceRuntimeCore.HmUtils.getLanguage())

    if (languageTable[langUtils.lang]) {
        return languageTable[langUtils.lang]
    }

    return languageTable["en-US"]
}

const languageTable = {
    "en-US": {
        weekNamesConfig: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        monthNamesConfig: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    "uk-UA": {
        weekNamesConfig: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
        monthNamesConfig: ['Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Черв', 'Лип', 'Сер', 'Вер', 'Жовт', 'Лист', 'Груд'],
    },
    "ko-KR": {
        weekNamesConfig: ['월', '화', '수', '목', '금', '토', '일'], // Korean (Korea)
        monthNamesConfig: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    },
    "fr-FR": {
        weekNamesConfig: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'], // French (France)
        monthNamesConfig: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
    },
    "de-DE": {
        weekNamesConfig: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'], // German (Germany)
        monthNamesConfig: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    },
    "id-ID": {
        weekNamesConfig: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'], // Indonesian
        monthNamesConfig: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
    },
    "pl-PL": {
        weekNamesConfig: ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb', 'Nd'], // Polish (Poland)
        monthNamesConfig: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
    },
    "it-IT": {
        weekNamesConfig: ['Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa', 'Do'], // Italian (Italy)
        monthNamesConfig: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
    },
    "ja-JP": {
        weekNamesConfig: ['月', '火', '水', '木', '金', '土', '日'], // Japanese (Japan)
        monthNamesConfig: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    },
    "th-TH": {
        weekNamesConfig: ['จ', 'อ', 'พ', 'พ', 'ศ', 'ส', 'อา'], // Thai
        monthNamesConfig: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
    },
    "ar-EG": {
        weekNamesConfig: ['ا', 'ث', 'أ', 'خ', 'ج', 'س', 'ح'], // Arabic (Egypt)
        monthNamesConfig: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
    },
    "vi-VN": {
        weekNamesConfig: ['Th', 'Ba', 'Tư', 'Năm', 'Sa', 'Bảy', 'CN'], // Vietnamese
        monthNamesConfig: ['Th1', 'Th2', 'Th3', 'Th4', 'Th5', 'Th6', 'Th7', 'Th8', 'Th9', 'Th10', 'Th11', 'Th12'],
    },
    "pt-PT": {
        weekNamesConfig: ['Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa', 'Do'], // Portuguese
        monthNamesConfig: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    },
    "nl-NL": {
        weekNamesConfig: ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'], // Dutch
        monthNamesConfig: ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
    },
    "tr-TR": {
        weekNamesConfig: ['Pz', 'Pt', 'Sa', 'Ç', 'Pe', 'Cu', 'Pz'], // Turkish (Turkey)
        monthNamesConfig: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
    },
    "iw-IL": {
        weekNamesConfig: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'], // Hebrew (Israel)
        monthNamesConfig: ['ינו', 'פבר', 'מרץ', 'אפר', 'מאי', 'יונ', 'יול', 'אוג', 'ספט', 'אוק', 'נוב', 'דצמ'],
    },
    "pt-BR": {
        weekNamesConfig: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'], // Portuguese (Brazil)
        monthNamesConfig: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    },
    "ro-RO": {
        weekNamesConfig: ['Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ', 'Du'], // Romanian
        monthNamesConfig: ['Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    "cs-CZ": {
        weekNamesConfig: ['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'], // Czech
        monthNamesConfig: ['Led', 'Úno', 'Bře', 'Dub', 'Kvě', 'Čvn', 'Čvc', 'Srp', 'Zář', 'Říj', 'Lis', 'Pro'],
    },
    "el-GR": {
        weekNamesConfig: ['Δ', 'Τ', 'Τ', 'Π', 'Π', 'Σ', 'Κ'], // Greek
        monthNamesConfig: ['Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μαϊ', 'Ιουν', 'Ιουλ', 'Αυγ', 'Σεπ', 'Οκτ', 'Νοε', 'Δεκ'],
    },
    "sr-RS": {
        weekNamesConfig: ['Po', 'Ut', 'Sr', 'Čt', 'Pe', 'Sub', 'Ned'], // Serbian (Latin)
        monthNamesConfig: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Avg', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    "ca-ES": {
        weekNamesConfig: ['Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds', 'Dg'], // Catalan
        monthNamesConfig: ['Gen', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Des'],
    },
    "fi-FI": {
        weekNamesConfig: ['Ma', 'Ti', 'Ke', 'To', 'Pe', 'La', 'Su'], // Finnish
        monthNamesConfig: ['Tam', 'Hel', 'Maa', 'Huh', 'Tou', 'Kes', 'Hei', 'Elo', 'Syys', 'Lok', 'Marr', 'Jou'],
    },
    "nb-NO": {
        weekNamesConfig: ['Ma', 'Ti', 'On', 'To', 'Fr', 'Lø', 'Sø'], // Norwegian
        monthNamesConfig: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
    },
    "da-DK": {
        weekNamesConfig: ['Ma', 'Ti', 'On', 'To', 'Fr', 'Lø', 'Sø'], // Danish
        monthNamesConfig: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
    },
    "sv-SE": {
        weekNamesConfig: ['Må', 'Ti', 'On', 'To', 'Fr', 'Lö', 'Sö'], // Swedish
        monthNamesConfig: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
    },
    "hu-HU": {
        weekNamesConfig: ['H', 'K', 'Sze', 'Cs', 'P', 'Szo', 'V'], // Hungarian
        monthNamesConfig: ['Jan', 'Feb', 'Márc', 'Ápr', 'Máj', 'Jún', 'Júl', 'Aug', 'Szept', 'Okt', 'Nov', 'Dec'],
    },
    "ms-MY": {
        weekNamesConfig: ['Is', 'Se', 'Ra', 'Ke', 'Ju', 'Sa', 'Ah'], // Malay
        monthNamesConfig: ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ogo', 'Sep', 'Okt', 'Nov', 'Dis'],
    },
    "sk-SK": {
        weekNamesConfig: ['Po', 'Ut', 'St', 'Št', 'Pi', 'So', 'Ne'], // Slovakian
        monthNamesConfig: ['Jan', 'Feb', 'Mar', 'Apr', 'Máj', 'Jún', 'Júl', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
    },
    "hi-IN": {
        weekNamesConfig: ['सो', 'मं', 'बु', 'गु', 'शु', 'शा', 'रव'], // Hindi
        monthNamesConfig: ['जन', 'फर', 'मार', 'अप्र', 'मई', 'जून', 'जुल', 'अगस', 'सित', 'अक्तु', 'नव', 'दिस'],
    }
};


export function getLangTable() {
    const langUtils = new DeviceRuntimeCore.HmUtils.Lang(DeviceRuntimeCore.HmUtils.getLanguage())

    if (languageTable[langUtils.lang]) {
        return languageTable[langUtils.lang]
    }

    return languageTable["en-US"]
}

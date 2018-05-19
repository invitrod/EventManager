function convertUnixStampToScreenDate(unixstamp, withTime = false) {
    let date = new Date(+unixstamp);
    let screenDate = addZeroIfOneCharacter(date.getDate()) + "." + addZeroIfOneCharacter(date.getMonth()) + "." + date.getFullYear();
    return screenDate;
}

function convertScreenDateToUnixStamp(date) {
    //format: 22.04.1999
    let pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    let dt = new Date(date.replace(pattern, '$3-$2-$1'));
    return +dt;
}

function addZeroIfOneCharacter(value) {
    let str = value.toString();
    return str.length == 1 ? "0" + str : str;
}

function html2text(html) {
    var tag = document.createElement('div');
    tag.innerHTML = html;

    return tag.innerText;
}

function dateToEpoch(thedate) {
    let time = thedate.getTime();
    return time - (time % 86400000);
}
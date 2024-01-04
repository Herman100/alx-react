export function getFullYear() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return currentYear;
}

export function getFooterCopy(isIndex) {
    return isIndex === true
        ? "Holberton School"
        : "Holberton School main dashboard";
}


export function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD';
}

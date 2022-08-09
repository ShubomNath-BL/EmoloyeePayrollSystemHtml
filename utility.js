const stringifyDate = (date) => {
    const options = {day: "numeric", month: "short", year: "numeric"};
    const newdate = !date ? undefined: 
                    new Date(Date.parse(date)).toLocaleDateString("en-GB", options);
    return newdate;
}
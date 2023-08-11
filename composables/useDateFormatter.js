export const useDateFormatter = (date) => {
    if (date) {
        const dates = new Date(date);
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Intl.DateTimeFormat("en-US", options).format(dates);
    }
};

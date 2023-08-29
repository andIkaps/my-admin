export const useDateFormatter = (date: Date): any => {
    if (date) {
        const dates: Date = new Date(date);
        const options: any = { year: "numeric", month: "long", day: "numeric" };

        return new Intl.DateTimeFormat("en-US", options).format(dates);
    }
};

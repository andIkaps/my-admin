export const useDateTimeFormat = (dateTime) => {
    if (dateTime) {
        let date = new Date(dateTime);
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        const monthIndex = date.getMonth();
        const day = date.getDate();
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();

        const formattedDate = `${
            months[monthIndex]
        } ${day}, ${year} ${hours}:${minutes.toString().padStart(2, "0")}`;

        return formattedDate;
    }
};

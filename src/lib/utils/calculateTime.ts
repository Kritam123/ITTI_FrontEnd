export const timeCounter = (uploadTime:Date)=>{
    let timer;
    function timeAgo(date:any) {
        const now = new Date() as any;
        const createdDate = new Date(date) as any;
        const seconds = Math.floor((now - createdDate) / 1000);
        let interval = Math.floor(seconds / 31536000); // Seconds in a year
        if (interval > 1) {
            return interval + " years ago";
        }
        interval = Math.floor(seconds / 2592000); // Seconds in a month
        if (interval > 1) {
            return interval + " months ago";
        }
        interval = Math.floor(seconds / 86400); // Seconds in a day
        if (interval > 1) {
            return interval + " days ago";
        }
        interval = Math.floor(seconds / 3600); // Seconds in an hour
        if (interval > 1) {
            return interval + " hours ago";
        }
        interval = Math.floor(seconds / 60); // Seconds in a minute
        if (interval > 1) {
            return interval + " minutes ago";
        }
        return "just now";
    }
    
    function updatePostTime() {
        timer =  timeAgo(uploadTime);
    }
    
    updatePostTime();
    setInterval(updatePostTime, 60000);
    return timer;
}
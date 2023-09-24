const ApiKey= "AIzaSyAR9-wtdAKPBEGNezOxrOs0pQ9H87qC-kk";

const API =
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=48&key="+ApiKey;

export const searchAPI=
"https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key="+ ApiKey +"&q=";

export default API;
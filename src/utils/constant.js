const ApiKey= "AIzaSyAR9-wtdAKPBEGNezOxrOs0pQ9H87qC-kk";

const API =
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=48&key="+ApiKey;

export const searchAPI=
"https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video,channel&key="+ ApiKey +"&q=";

export const videoAPI=
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key="+ApiKey+"&id=";

export const relatedVideoAPI=
"https://youtube.googleapis.com/youtube/v3/search?part=snippet%2CcontentDetails%2Cstatistics&maxResults=25&type=video&key="+ApiKey+"&relatedToVideoId=";


export default API;
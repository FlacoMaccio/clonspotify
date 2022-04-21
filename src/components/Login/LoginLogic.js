

export const getTokenFromURL = () => {
    console.log(window.location.hash);
    return window.location.hash.substring(1).split("&")
    .reduce((initial, item)=> {
        let parts = item.split("=")
         initial[parts[0]]= decodeURIComponent(parts[1]);
        return initial 
    }, {})
}

const endpoint = "https://accounts.spotify.com/authorize"
const clientID = "bf6fbb9c3db641e1ac5c4279dc4c7f61"
const redirectUri = "http://localhost:3000/"
// const scopes = ["user-read.currently-playing",
// "user-read.recently-played",
// "user-read.playback-state",
// "user-top-read",
// "user-modify-playback-state",]
//&scope=${scopes.join("%20")}

export const loginURL = `${endpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}&show_dialog=true}`

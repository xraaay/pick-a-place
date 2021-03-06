export const shuffleResults = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

export const getGeoLocation = (fn) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(fn)
    } else {
        alert("GeoLocation not available")
    }
}

export const randomNumberOfArr = (arr) => {
    return Math.floor(Math.random() * arr.length)
}
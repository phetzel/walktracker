const distanceBetween = (lat1, lng1, lat2, lng2) => {
    const earthRad = 6371;
    const degToRad = Math.PI / 180;

    const dLat = (lat2 - lat1) * degToRad;
    const dLng = (lng2 - lng1) * degToRad;
    lat1 = lat1 * degToRad;
    lat2 = lat2 * degToRad;

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.sin(dLng / 2) * Math.sin(dLng / 2) *
          Math.cos(lat1) * Math.cos(lat2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRad * c;
}

export default distanceBetween;
export const CallStations = async() => {
    const res = await fetch('../data/station.json');
    console.log(res.json());
    if (res.ok) {
        return res;
    } else {
        console.log(new Error(`can't receive station data`));
    }

    return;
}
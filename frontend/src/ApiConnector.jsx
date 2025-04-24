export default function ApiConnector () {
    const getHotels = () => { return require('./data/hotels.json') };
    const getRooms = () => { return require('./data/rooms.json') };
    const getTrips = () => { return require('./data/trips.json') };
    
    return {
        getHotels,
        getRooms,
        getTrips
    }
};
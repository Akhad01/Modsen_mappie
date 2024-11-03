import axios from "axios";

interface FiltersByCategory {
    and: Array<{ field: string; values: string[]}>;
    or: Array<{ field: string; values: string[] }>;
    exclude: Array<{ field: string; values: string[] }> 
  }

const filtersByCategory: Record<string, FiltersByCategory> = {
    nature: {
      and: [{ field: 'natural', values: [] }],
      or: [],
      exclude: [{ field: 'natural', values: ['tree', 'shrub'] }]
    },
    culture: {
      and: [],
      or: [{ 'field': 'tourism', values: ['museum', 'theatre', 'artwork'] }],
      exclude: [{ 'field': 'amenity', values: ['cafe'] }]
    },
    historic: {
      and: [{ 'field': 'historic', values: [] }],
      or: [],
      exclude: []
    },
    religion: {
      and: [{ 'field': 'religion', values: [] }],
      or: [],
      exclude: []
    },
    architecture: {
      and: [{
        'field': 'religion',
        values: ['pyramid', 'amphitheatre', 'palace', 'arc', 'watchtower', 'lighthouse', 'bridge', 'tower']
      }],
      or: [],
      exclude: []
    },
    industrial: {
      and: [{ 'field': 'industrial', values: [] }],
      or: [],
      exclude: []
    },
    avocation: {
      and: [],
      or: [{ 'field': 'leisure', values: ['park', 'amusement_ride', 'water_park', 'theme_park'] }],
      exclude: []
    },
    sport: {
      and: [],
      or: [{
        'field': 'leisure',
        values: ['sports_centre', 'stadium', 'pitch', 'swimming_pool', 'golf_course', 'tennis_court', 'skatepark', 'fitness_station']
      }],
      exclude: []
    },
    adult: {
      and: [{ 'field': 'shop', values: ['erotic'] }],
      or: [],
      exclude: []
    },
    food: {
      and: [],
      or: [{ 'field': 'leisure', values: ['restaurant', 'fast_food'] }],
      exclude: []
    },
    cafe: {
      and: [{ 'field': 'amenity', values: ['cafe'] }],
      or: [],
      exclude: []
    },
    bank: {
      and: [{ 'field': 'amenity', values: ['bank'] }],
      or: [],
      exclude: []
    },
    sleep: {
      and: [],
      or: [{ 'field': 'tourism', values: ['hotel', 'motel', 'camp_site'] }],
      exclude: []
    }
};

const categories = Object.keys(filtersByCategory);

const queryString = `[out:json];
    (${categories.map(category => { 
        if (!filtersByCategory[category]) return '';
        const { and, or, exclude } = filtersByCategory[category];
        const filters = [
            ...and.map(condition => condition.values.length ? condition.values.map(v => `["${condition.field}"="${v}"]`).join('') : `["${condition.field}"]`),
            ...or.map(condition => `["${condition.field}"~"${condition.values.join('|')}"]`),
            ...exclude.map(condition => condition.values.map(v => `["${condition.field}"!="${v}"]`).join(''))
        ].join('');
        
        return `node(around:${10000},${53.85277226523449},${27.456161674329483})${filters};`;;
    }).join('')});
    out center;
`

export const fetchPlacesTest = async () => {
    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(queryString)}`
    const response = await axios.get(url)
    console.log('res', response);
}

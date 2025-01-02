
export const DEFAULT_PLACE = {
    name:"Lagos",
    place_id:"lagos",
    adm_area1:"Lagos",
    adm_area2:null,
    country:"Nigeria",
    lat:"6.45407N",
    lon:"3.39467E",
    timezone:"Africa/Lagos",
    type:"settlement",
};

export const MEASUREMENT_SYSTEMS = {
    AUTO: 'auto',
    METRIC: 'metric',
    UK: 'uk',
    US: 'us',
    CA: 'ca',
};

export const UNITS = {
    metric: {
        temperature: '°C',
        windSpeed: 'm/s',    
        precipitation: 'mm',
        visibility: 'km',
        cloud_cover: '%',
        uv_index: '',
    },
    us: {
        temperature: '°F',
        windSpeed: 'mph',
        precipitation: 'in',
        visibility: 'mi',
        cloud_cover: '%',
        uv_index: '',
    },
    uk: {
        temperature: '°C',
        windSpeed: 'mph',
        precipitation: 'mm',
        visibility: 'mi',
        cloud_cover: '%',
        uv_index: '',
    },
}
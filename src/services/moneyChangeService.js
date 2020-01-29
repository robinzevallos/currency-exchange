import { ajax } from 'rxjs/ajax';

const URL_BASE = 'http://data.fixer.io/api/'
const ACCESS_KEY = '?access_key=15b8ef1dbab631f338ecef1d51acf6da'

const getHistorical = date => {
   const endPoint = getEndPoint(date);
   const response$ = ajax.getJSON(endPoint)
   return response$;
}

const getLatest = _ => {
   const endPoint = getEndPoint("latest")
   const response$ = ajax.getJSON(endPoint)
   return response$
}

const getEndPoint = serviceUrl => `${URL_BASE}${serviceUrl}${ACCESS_KEY}`

export { getLatest, getHistorical }



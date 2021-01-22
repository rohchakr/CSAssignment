console.log(d3.version)

const url = 'https://clarisights-users.s3.eu-central-1.amazonaws.com/frontend-assignment/1000+items+table+response.json'

d3.json(url, {method: 'GET', referer: 'cors'})
    .then(response => console.log(response))
    .catch(error => console.log(error))
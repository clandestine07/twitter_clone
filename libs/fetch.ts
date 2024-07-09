const axios = require('axios')

const fetcher = (url: string) => axios.get(url).then((res: any) => res.data)

export default fetcher
const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

// index, show, store, update, destroy

module.exports = {

    async index(request, response) {
        const devs = await Dev.find()
        return response.json(devs)
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body

        // Verificando se o dev já está cadastrado
        let dev = await Dev.findOne({ github_username })

        if (!dev) {
            const api_github = await axios.get(`https://api.github.com/users/${ github_username }`)
            // Verifica se o nome existe, se não existir, utiliza o valor do login
            const { name = login, bio, avatar_url } = api_github.data
            const techsArray = parseStringAsArray(techs)
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            let dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })
        }

       
    
        return response.json(dev)
    }
}
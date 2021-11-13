const getEnvironmnetUrls = function (environment) {
    if (environment == 'local') {
        return {
            env: {
                baseUrl: 'http://localhost:3000'
            }
        }
    } else {
        return {
            env: {
                baseUrl: 'https://juice-shop.herokuapp.com/'
            }
        }
    }
}

module.exports = getEnvironmnetUrls;
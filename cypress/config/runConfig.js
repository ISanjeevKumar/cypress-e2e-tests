const getEnvironmnetUrls = function (environment) {
    if (environment == 'local') {
        return {
            env: {
                baseUrl: 'https://www.saucedemo.com/'
            }
        }
    } else {
        return {
            env: {
                baseUrl: 'https://www.saucedemo.com/'
            }
        }
    }
}

module.exports = getEnvironmnetUrls;
const fs = require('fs')

module.exports.copyInputDir = function (basedir, workdir) {
    if (!fs.existsSync(basedir)) {
        throw new Error('The presentation directory ' + basedir + ' does not exist.')
    }
    if (!fs.existsSync(workdir)) {
        throw new Error('The working directory ' + workdir + ' does not exist.')
    }
    fs.cpSync(basedir, workdir + '/data', { recursive: true, errorOnExist: true })
}

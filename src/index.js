const fs = require('fs')

const { config }  = require('./modules/config')
const { copyInputDir } = require('./modules/copy')
const { createVideo } = require('./modules/processor')


async function run(config) {
    try {
        const start = Date.now()
        console.log('[Start] Rendering downloadable video for BBB presentation ', config)

        // create workdir
        fs.mkdirSync('./tmp', { recursive: true })
        config.workdir = fs.mkdtempSync('./tmp/data')

        if (config.args.copy) {
            copyInputDir(config.args.input, config.workdir)
            config.datadir = config.workdir + '/data'
        }
        else {
            config.datadir = config.args.input
        }

        await createVideo(config)
        
        const end = Date.now()
        const processTime = (end - start) / 1000
        console.log('[End] Finished rendering downloadable video for BBB presentation in ' + processTime + ' seconds ', config)
    } catch (error) {
        console.error('[Error] Failed rendering downloable video for BBB presentation ', config, error)
    }
}

run(config)



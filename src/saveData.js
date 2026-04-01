import fs from 'fs/promises'

export async function saveUrlsInJson(data) {
    const savePath = process.env.SAVEPATH
    const createFolders = (process.env.CREATEFOLDERS == 'true')

    const currentDate  = new Date().toISOString().replace(/[:.]/g,'-');
    const filename = `${currentDate}.json`

    if(createFolders) await fs.mkdir(path.dirname(`${savePath}/${filename}`), { recursive: true });
    await fs.writeFile(`${savePath}/${filename}`,JSON.stringify(data))
    return filename
}
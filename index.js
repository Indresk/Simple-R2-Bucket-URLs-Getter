import dotenv from 'dotenv';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { getAllObjectUrls } from './src/fetchData.js';
import { saveUrlsInJson } from './src/saveData.js';

dotenv.config();
const url = process.env.URL;
const bname = process.env.BNAME;

const rl = readline.createInterface({ input, output });

async function primaryMenu() {
    const selectedOption = await rl.question(`\n1.Fetch URLs. \n2.Write file with the URLs. \n3.Exit. \n \nWhat do you want to do?: \n`);
    return selectedOption
}

let runProgram = true
let dataGathered = false

do{
    let option = await primaryMenu();
    switch (option) {
        case '1':
            dataGathered = await getAllObjectUrls(bname, url);
            console.log(dataGathered)
        break;
        case '2':
            if(!dataGathered){console.log("No tenemos data para guardar");break;}
            const newFilename = await saveUrlsInJson(dataGathered);
            console.log('New file created: '+newFilename)
        break;
        case '3':
            console.log('Thx, Bye')
            rl.close();
            runProgram = false
        break;

        default:
            console.log('Select an option.')
        break;
    }
}while(runProgram)
import {homedir} from 'os';
import {join} from 'path';
import { promises} from 'fs';
import { isUndefined } from 'util';

const filePath = join(homedir(), 'weather-data.json');

const TOKEN_DICTIONARY = {
    token: 'token',
    city: 'city'
}

const saveKeyValue = async (key, value) => {
    let data = {};
    if(await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        data = JSON.parse(file);
    }

    data[key] = value;
    await promises.writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async (key) => {
    if(await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        data = JSON.parse(file);
        return data[key];
    }
    return isUndefined;
};

const isExist = async (path) => {
    try {
        await promises.start(path);
        return true;
    } catch (e) {
        return false;
    }
};


export {saveKeyValue, getKeyValue, TOKEN_DICTIONARY};
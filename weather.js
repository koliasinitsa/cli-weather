#!/usr/bin/env node
import {getArgs} from './helpers/args.js';
import {getCoord } from './services/api.service.js';
import { printHelp, printError, printSuccess } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';


const saveToken = async (token) => {
	if(!token.length) {
		printError('не передан токен');
		return;
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.token, token);
		printSuccess('token saved');
	} catch (e) {
		printError(e.messsage);
	}
}

const initCLI = () => {
	const args = getArgs(process.argv);
	if(args.h) {
		// console help
		printHelp();
	}
	if(args.s) {
		// save cite
	}
	if(args.t) {
		//save token
		return saveToken(args.t);
	}
	getCoord('moscow');
};

initCLI();
import chalk from 'chalk'; //подсветка
import dedent from 'dedent-js';// чтобы убрать оступ

const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + '  ' + error);
}

const printSuccess = (message) => {
    console.log(chalk.bgGreen(' success ') + '  ' + message);
}

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        ьез параметров = вывод погоды 
        -s [CITY] для установки города
        -h для вывода помощи
        -t [API_key] для сохранения токена
        `
    );
};

export { printError, printSuccess, printHelp };
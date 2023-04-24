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

const printWeather = (res, icon) => {
    console.log(
        dedent`${chalk.bgYellow(' WEATHER ')} погода в городе ${res.name}
        ${icon} ${res.weather[0].description}
        tempecher: ${res.main.temp} ощущаеться как ${res.main.feels_like}
        влажность: ${res.main.humidity}%
        скорость ветра:  ${res.main.speed}
        `
    );
}

export { printError, printSuccess, printHelp, printWeather };
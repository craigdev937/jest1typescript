import type { Config } from "jest";
import { defaults } from "jest-config";

const config: Config = {
    verbose: true,
    moduleFileExtensions: [...defaults.moduleFileExtensions]
};

export default config;


// module.exports = {
//     roots: ["<rootDir>/src"],
//     testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
//     moduleFileExtensions: ["ts", "tsx", "js", ".jsx", "json", "node"],
//     moduleNameMapper: {
//         "\.(css|jpg|png)$": "<rootDir>/empty-module.js",
//     }
// };




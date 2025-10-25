/**
 * Capitaliza a primeira letra de cada palavra
 *
 * @param str - String a ser capitalizada
 * @returns A string com a primeira letra de cada palavra capitalizada
 *
 * @example
 * ```ts
 * import { capitalize } from 'example-lib';
 * const result = capitalize('hello world');
 * console.log(result); // Hello World
 * ```
 */
export function capitalize(str: string): string {
	return str
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
}

/**
 * Inverte uma string
 *
 * @param str - String a ser invertida
 * @returns A string invertida
 *
 * @example
 * ```ts
 * import { reverseString } from 'example-lib';
 * const result = reverseString('hello');
 * console.log(result); // olleh
 * ```
 */
export function reverseString(str: string): string {
	return str.split("").reverse().join("");
}

/**
 * Trunca uma string para um comprimento máximo, adicionando "..." se necessário
 *
 * @param str - String a ser truncada
 * @param maxLength - Comprimento máximo permitido
 * @returns A string truncada
 *
 * @example
 * ```ts
 * import { truncateString } from 'example-lib';
 * const result = truncateString('This is a long string', 10);
 * console.log(result); // This is a...
 * ```
 */	
export function truncateString(str: string, maxLength: number): string {
	if (str.length <= maxLength) {
		return str;
	}
	return str.slice(0, maxLength) + "...";
}

/**
 * Verifica se uma string é um palíndromo
 *
 * @param str - String a ser verificada
 * @returns true se a string for um palíndromo, false caso contrário
 *
 * @example
 * ```ts
 * import { isPalindrome } from 'example-lib';
 * const result = isPalindrome('racecar');
 * console.log(result); // true
 * ```
 * 
 * @see https://en.wikipedia.org/wiki/Palindrome 
 */
export function isPalindrome(str: string): boolean {
	const cleanedStr = str.replace(/[\W_]/g, "").toLowerCase();
	const reversedStr = cleanedStr.split("").reverse().join("");
	return cleanedStr === reversedStr;
}

/**
 * Conta o número de vogais em uma string
 *
 * @param str - String a ser analisada
 * @returns O número de vogais na string
 *
 * @example
 * ```ts
 * import { countVowels } from 'example-lib';
 * const result = countVowels('hello');
 * console.log(result); // 2
 * ```
 */
export function countVowels(str: string): number {
	const matches = str.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
}



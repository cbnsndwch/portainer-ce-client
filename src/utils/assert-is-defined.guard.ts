export type Constructor<T> = new (...args: any[]) => T;

/**
 * Checks that the given value is not `undefined` or `null`,
 * throwing a customizeble error otherwise.
 *
 * @param item The item being checked
 * @param errorClass An optional error class to throw if the item is undefined. Defaults to `Error`
 * @param message An optional message for the exception. Defaults to `Item not defined`
 */
export function assertIsDefined<T, TError extends Error = Error>(
    item: T,
    errorClass: Constructor<TError>,
    message?: string
) {
    if (typeof item === 'undefined' || item === null) {
        throw new errorClass(message || 'Item not defined');
    }
}

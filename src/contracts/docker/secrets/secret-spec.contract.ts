import { IDriver } from './driver.contract';

export interface ISecretSpec {
    /**
     * User-defined name of the secret.
     */
    Name: string;

    /**
     * User-defined key/value metadata.
     */
    Labels: Record<string, string>;

    /**
     * `base64-url`-encoded data to store as secret. See: [RFC 4648](https://tools.ietf.org/html/rfc4648#section-5)
     *
     * This field is only used to _create_ a secret, and is not returned by other endpoints.
     */
    Data: string;

    /**
     * The secrets driver used to fetch the secret's value from an external secret store.
     */
    Driver: IDriver;

    /**
     * Templating driver, if applicable
     *
     * Templating controls whether and how to evaluate the config payload as a
     * template. If no driver is set, no templating is used.
     */
    Templating: IDriver;
}

export type ICreateSecretInput = Pick<ISecretSpec, 'Name' | 'Data' | 'Labels'>;

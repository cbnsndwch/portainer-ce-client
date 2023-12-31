import { IDriver } from './driver.contract';

/**
 * Input data for the `createSecret` endpoint.
 */
export interface ICreateSecretInput {
    /**
     * User-defined name of the secret.
     */
    Name: string;

    /**
     * User-defined key/value metadata.
     */
    Labels: Record<string, string>;

    /**
     * `base64url`-encoded data to store as secret. See: [RFC 4648](https://tools.ietf.org/html/rfc4648#section-5)
     */
    Data: string;

    /**
     * The secrets driver used to fetch the secret's value from an external secret store.
     */
    Driver?: IDriver;

    /**
     * Templating driver, if applicable
     *
     * Templating controls whether and how to evaluate the config payload as a
     * template. If no driver is set, no templating is used.
     */
    Templating?: IDriver;
}

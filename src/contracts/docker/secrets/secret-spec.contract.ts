import { IDriver } from './driver.contract';

/**
 * A data contract for the `SecretSpec` object.
 *
 * @see https://docs.docker.com/engine/api/v1.41/#operation/SecretCreate
 */
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
     * The secrets driver used to fetch the secret's value from an external secret store.
     */
    Driver?: IDriver;
}

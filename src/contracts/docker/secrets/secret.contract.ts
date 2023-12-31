import { IObjectVersion } from './object-version.contract';
import { ISecretSpec } from './secret-spec.contract';

/**
 * A data contract for secrets as returned by the Docker API.
 */
export interface ISecret {
    /**
     * The ID of the secret.
     */
    ID: string;

    /**
     * The version information of the secret.
     */
    Version: IObjectVersion;

    /**
     * Secret data.
     */
    Spec: ISecretSpec;

    /**
     * The date and time at which the secret was created.
     */
    CreatedAt: string;

    /**
     * The date and time at which the secret was last updated.
     */
    UpdatedAt: string;
}

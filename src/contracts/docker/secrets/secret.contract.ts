import { IObjectVersion } from './object-version.contract';
import { ISecretSpec } from './secret-spec.contract';

export interface ISecret {
    ID: string;

    Version: IObjectVersion;

    CreatedAt: string;

    UpdatedAt: string;

    Spec: ISecretSpec;
}

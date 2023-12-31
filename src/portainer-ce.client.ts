import Axios, { AxiosInstance } from 'axios';

import {
    IIdResponse,
    ISecret,
    ISecretSpec,
    IListSecretsFilterInput,
    PortainerCeClientOptions,
    ICreateSecretInput
} from './contracts';
import { assertIsDefined } from './utils';

export class PortainerCeClient {
    protected readonly http: AxiosInstance;

    constructor({
        baseUrl,
        accessToken,
        extraHeaders = {}
    }: PortainerCeClientOptions) {
        this.http = Axios.create({
            baseURL: baseUrl,
            headers: {
                'content-type': 'application/json',
                accept: 'application/json',
                Authorization: `Bearer ${accessToken}`,
                ...extraHeaders
            }
        });
    }

    //#region Docker Secrets

    /**
     * Create a secret
     * @param endpointId Portainer environment ID
     * @param data Input data
     */
    async createSecret(endpointId: number, data: ICreateSecretInput) {
        // verify the required parameter 'endpointId' is set
        assertIsDefined(
            endpointId,
            Error,
            'Missing the required parameter `endpointId` when calling secretCreate'
        );

        return await this.http.post<IIdResponse>(
            `/endpoints/${endpointId}/docker/secrets/create`,
            data
        );
    }

    /**
     * Delete a secret
     *
     * @param endpointId Portainer environment ID
     * @param id ID of the secret
     */
    async deleteSecret(endpointId: number, id: string) {
        // verify the required parameter 'endpointId' is set
        assertIsDefined(
            endpointId,
            Error,
            'Missing the required parameter `endpointId` when calling deleteSecret'
        );

        // verify the required parameter 'id' is set
        assertIsDefined(
            id,
            Error,
            "Missing the required parameter 'id' when calling deleteSecret"
        );

        return await this.http.delete(
            `/endpoints/${endpointId}/docker/secrets/${id}`
        );
    }

    /**
     * Inspect a secret
     *
     * @param endpointId Portainer environment ID
     * @param id ID of the secret
     */
    async inspectSecret(endpointId: number, id: string) {
        // verify the required parameter 'endpointId' is set
        assertIsDefined(
            endpointId,
            Error,
            'Missing the required parameter `endpointId` when calling inspectSecret'
        );

        // verify the required parameter 'id' is set
        assertIsDefined(
            id,
            Error,
            "Missing the required parameter 'id' when calling inspectSecret"
        );

        return await this.http.get<ISecret>(
            `/endpoints/${endpointId}/docker/secrets/${id}`
        );
    }

    /**
     * List secrets
     *
     * @param endpointId Portainer environment ID
     * @param filters (Optional) List filters
     */
    async listSecrets(
        endpointId: number,
        filters: IListSecretsFilterInput = {}
    ) {
        assertIsDefined(
            endpointId,
            Error,
            'Missing the required parameter `endpointId` when calling listSecrets'
        );

        return await this.http.get<ISecret[]>(
            `/endpoints/${endpointId}/docker/secrets`,
            {
                params: {
                    filters: JSON.stringify(filters)
                }
            }
        );
    }

    /**
     * Update a secret's labels
     *
     * **Note**: No fields other  than the labels can be updated for docker secrets.
     *
     * @param endpointId Portainer environment ID
     * @param secretId The ID or name of the secret
     * @param version The version number of the secret object being updated. This is required to avoid conflicting writes.
     * @param labels The new Labels to set on the secret.
     */
    async updateSecretLabels(
        endpointId: number,
        secretId: string,
        version: number,
        labels: ISecretSpec['Labels'] = {}
    ) {
        assertIsDefined(
            endpointId,
            Error,
            'Missing the required parameter `endpointId` when calling updateSecret'
        );

        assertIsDefined(
            secretId,
            Error,
            "Missing the required parameter 'id' when calling updateSecret"
        );

        assertIsDefined(
            version,
            Error,
            "Missing the required parameter 'version' when calling updateSecret"
        );

        return await this.http.post(
            `/endpoints/${endpointId}/docker/secrets/${secretId}/update`,
            {
                Labels: labels
            },
            {
                params: {
                    version
                }
            }
        );
    }

    //#endregion Docker Secrets
}

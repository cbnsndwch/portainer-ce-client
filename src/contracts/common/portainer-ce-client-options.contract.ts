export type PortainerCeClientOptions = {
    /**
     * The base URL of the Portainer instance
     */
    baseUrl: string;

    /**
     * The access token to use for authentication
     */
    accessToken: string;

    /**
     * (Optional) Additional headers to send with each request
     */
    extraHeaders?: Record<string, string>;
};

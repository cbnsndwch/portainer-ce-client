/**
 * The filters accepted by the list docker secrets endpoint
 */
export interface IListSecretsFilterInput {
    /**
     * (Optional) secret ID
     */
    id?: string;

    /**
     * (Optional) either the name of a label or a `labelName=labelValue` string.
     */
    label?: string;

    /**
     * (Optional) secret name
     */
    name?: string;

    /**
     * (Optional) secret names
     */
    names?: string;
}

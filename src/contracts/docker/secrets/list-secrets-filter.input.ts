/**
 * The filters acceptedd by the list docker secrets endpoint
 */
export type IListSecretsFilterInput = {
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
};

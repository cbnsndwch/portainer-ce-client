export interface IDriver {
    /**
     * Name of the driver.
     */
    Name: string;

    /**
     * Key/value map of driver-specific options.
     */
    Options: Record<string, string>;
}

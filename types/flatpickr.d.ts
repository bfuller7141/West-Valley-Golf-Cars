declare module 'flatpickr' {
    interface FlatpickrOptions {
        mode?: string;
        dateFormat?: string;
        minDate?: string | Date;
        // Add other options as needed
    }

    function flatpickr(selector: string, options?: FlatpickrOptions): void;

    export = flatpickr;
}
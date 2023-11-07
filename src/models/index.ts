export declare class Brand {
    readonly id: string;
    readonly name: string;
    readonly src: string;
    readonly models: CarModel[];
    readonly banner: string;
}

export interface CarModel {
    header: string;
    text: string;
    price: string;
    modelBanner: string;
}
declare module '*.scss' {
    interface IClasNames {
        [className: string]: string
    }
    const classNames: IClasNames;
    export = classNames
}
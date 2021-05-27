declare namespace DataDisplayCssNamespace {
  export interface IDataDisplayCss {
    chart: string;
  }
}

declare const DataDisplayCssModule: DataDisplayCssNamespace.IDataDisplayCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DataDisplayCssNamespace.IDataDisplayCss;
};

export = DataDisplayCssModule;

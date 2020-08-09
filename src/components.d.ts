/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyBanner {
    'color': string;
  }
  interface MyButton {
    'color': string;
  }
  interface MyChip {
    'data': {};
    'isDeletable': boolean;
  }
  interface MyCombobox {
    'defaultOptions': any[];
    'isClearable': boolean;
    'isDisabled': boolean;
    'isMultiple': boolean;
    'isOrdered': boolean;
    'isRequired': boolean;
    'label': string;
    'placeholder': string;
  }
  interface MyGrid {
    'columns': String;
    'columnsSmall': String;
  }
  interface MyGridCell {
    'span': String;
    'spanSmall': String;
  }
  interface MyIcon {
    /**
    * Specifies the label to use for accessibility. Defaults to the icon name.
    */
    'ariaLabel'?: string;
    'color'?: string;
    /**
    * If enabled, icon will be loaded lazily when it's visible in the viewport. Default, `false`.
    */
    'lazy': boolean;
    /**
    * Specifies which icon to use from the built-in set of icons.
    */
    'name'?: string;
    /**
    * The size of the icon. Available options are: `"small"` and `"large"`.
    */
    'size'?: string;
  }
}

declare global {


  interface HTMLMyBannerElement extends Components.MyBanner, HTMLStencilElement {}
  var HTMLMyBannerElement: {
    prototype: HTMLMyBannerElement;
    new (): HTMLMyBannerElement;
  };

  interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {}
  var HTMLMyButtonElement: {
    prototype: HTMLMyButtonElement;
    new (): HTMLMyButtonElement;
  };

  interface HTMLMyChipElement extends Components.MyChip, HTMLStencilElement {}
  var HTMLMyChipElement: {
    prototype: HTMLMyChipElement;
    new (): HTMLMyChipElement;
  };

  interface HTMLMyComboboxElement extends Components.MyCombobox, HTMLStencilElement {}
  var HTMLMyComboboxElement: {
    prototype: HTMLMyComboboxElement;
    new (): HTMLMyComboboxElement;
  };

  interface HTMLMyGridElement extends Components.MyGrid, HTMLStencilElement {}
  var HTMLMyGridElement: {
    prototype: HTMLMyGridElement;
    new (): HTMLMyGridElement;
  };

  interface HTMLMyGridCellElement extends Components.MyGridCell, HTMLStencilElement {}
  var HTMLMyGridCellElement: {
    prototype: HTMLMyGridCellElement;
    new (): HTMLMyGridCellElement;
  };

  interface HTMLMyIconElement extends Components.MyIcon, HTMLStencilElement {}
  var HTMLMyIconElement: {
    prototype: HTMLMyIconElement;
    new (): HTMLMyIconElement;
  };
  interface HTMLElementTagNameMap {
    'my-banner': HTMLMyBannerElement;
    'my-button': HTMLMyButtonElement;
    'my-chip': HTMLMyChipElement;
    'my-combobox': HTMLMyComboboxElement;
    'my-grid': HTMLMyGridElement;
    'my-grid-cell': HTMLMyGridCellElement;
    'my-icon': HTMLMyIconElement;
  }
}

declare namespace LocalJSX {
  interface MyBanner {
    'color'?: string;
  }
  interface MyButton {
    'color'?: string;
  }
  interface MyChip {
    'data'?: {};
    'isDeletable'?: boolean;
    'onMy-chip-delete'?: (event: CustomEvent<any>) => void;
  }
  interface MyCombobox {
    'defaultOptions'?: any[];
    'isClearable'?: boolean;
    'isDisabled'?: boolean;
    'isMultiple'?: boolean;
    'isOrdered'?: boolean;
    'isRequired'?: boolean;
    'label'?: string;
    'onMy-change'?: (event: CustomEvent<any>) => void;
    'placeholder'?: string;
  }
  interface MyGrid {
    'columns'?: String;
    'columnsSmall'?: String;
  }
  interface MyGridCell {
    'span'?: String;
    'spanSmall'?: String;
  }
  interface MyIcon {
    /**
    * Specifies the label to use for accessibility. Defaults to the icon name.
    */
    'ariaLabel'?: string;
    'color'?: string;
    /**
    * If enabled, icon will be loaded lazily when it's visible in the viewport. Default, `false`.
    */
    'lazy'?: boolean;
    /**
    * Specifies which icon to use from the built-in set of icons.
    */
    'name'?: string;
    /**
    * The size of the icon. Available options are: `"small"` and `"large"`.
    */
    'size'?: string;
  }

  interface IntrinsicElements {
    'my-banner': MyBanner;
    'my-button': MyButton;
    'my-chip': MyChip;
    'my-combobox': MyCombobox;
    'my-grid': MyGrid;
    'my-grid-cell': MyGridCell;
    'my-icon': MyIcon;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'my-banner': LocalJSX.MyBanner & JSXBase.HTMLAttributes<HTMLMyBannerElement>;
      'my-button': LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
      'my-chip': LocalJSX.MyChip & JSXBase.HTMLAttributes<HTMLMyChipElement>;
      'my-combobox': LocalJSX.MyCombobox & JSXBase.HTMLAttributes<HTMLMyComboboxElement>;
      'my-grid': LocalJSX.MyGrid & JSXBase.HTMLAttributes<HTMLMyGridElement>;
      'my-grid-cell': LocalJSX.MyGridCell & JSXBase.HTMLAttributes<HTMLMyGridCellElement>;
      'my-icon': LocalJSX.MyIcon & JSXBase.HTMLAttributes<HTMLMyIconElement>;
    }
  }
}



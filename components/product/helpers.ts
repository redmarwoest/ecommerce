import { Product } from "@common/types/product";

type AvailableChoices = "color" | "size" | string;

export type Choices = {
  [P in AvailableChoices]: string;
};

export const getVariant = (product: Product, choices: Choices) =>
  product.variants.find((variant) =>
    variant.options.every((variantOption) => {
      const optionName = variantOption.displayName.toLocaleLowerCase();
      if (optionName in choices) {
        if (choices[optionName] === variantOption.values[0].label) {
          return true;
        }
      }

      return (
        optionName in choices &&
        choices[optionName] === variantOption.values[0].label
      );
    })
  );

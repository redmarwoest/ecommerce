import useCart from "@common/cart/use-cart";
import { createCheckout, getCheckoutQuery } from "@framework/utils";

export default useCart;

export const handler = {
  fetchOptions: {
    query: getCheckoutQuery,
  },
  async fetcher({ fetch, options, input: { checkoutId } }: any) {
    let checkout;

    if (checkoutId) {
      debugger;
      const { data } = await fetch({
        ...options,
        variables: {
          checkoutId,
        },
      });
      debugger;
      checkout = data.node;
    } else {
      checkout = await createCheckout(fetch);
    }

    return checkout;
  },
  useHook: ({ useData }: any) => {
    const data = useData();
    return {
      data,
    };
  },
};

import { useHook, useMutationHook } from "@common/utils/use-hook";

const useAddItem = () => {
  return (input: any) => {
    return {
      output: JSON.stringify(input) + "_MODIFIED",
    };
  };
  const hook = useHook((hooks) => {
    return hooks.cart.useAddItem;
  });

  return useMutationHook({ ...hook });
};

export default useAddItem;

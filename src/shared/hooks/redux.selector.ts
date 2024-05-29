import { TypedRootState } from "@/store";
import { storeKey } from "@/store/plugin";
import { computed, inject } from "vue";

export const useTypedSelector = <State extends TypedRootState = TypedRootState>(
  fn: (state: State) => State[keyof State]
) => {
  const _state = inject(storeKey) as { state: TypedRootState };
  return computed(() => fn(_state.state as State));
};

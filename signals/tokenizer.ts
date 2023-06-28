import { computed, Signal } from "@preact/signals-core";
import { TiktokenModel } from "tiktoken";
import { cachedTokenizerFor } from "@/utils/client/tokenizer.ts";

export const model = new Signal<TiktokenModel>("gpt-3.5-turbo");

const tokenizer = computed(() => cachedTokenizerFor(model.value));

export const encode = (text: string) => tokenizer.value.encode(text);

export const decode = (tokens: number[]) => tokenizer.value.decode(tokens);

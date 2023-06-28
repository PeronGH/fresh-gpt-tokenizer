import {
  getEncoding,
  getEncodingNameForModel,
  Tiktoken,
  TiktokenEncoding,
  TiktokenModel,
} from "tiktoken";

const cachedTokenizers: Map<TiktokenEncoding, Tiktoken> = new Map();

export function cachedTokenizerFor(model: TiktokenModel): Tiktoken {
  const encodingName = getEncodingNameForModel(model);
  if (!cachedTokenizers.has(encodingName)) {
    cachedTokenizers.set(encodingName, getEncoding(encodingName));
  }
  return cachedTokenizers.get(encodingName)!;
}

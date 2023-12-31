import { computed, signal } from "@preact/signals";
import { FunctionComponent } from "preact";
import { encode } from "@/signals/tokenizer.ts";
import { formatArray } from "@/utils/client/formatter.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";

const text = signal("");
const encodedText = computed(() => formatArray(encode(text.value)));

const Encoder: FunctionComponent = () => (
  <div className="grid grid-cols-1 space-y-4 p-4 w-full">
    <textarea
      rows={10}
      className="resize-none border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
      onInput={(e) => text.value = e.currentTarget.value}
      disabled={!IS_BROWSER}
    >
    </textarea>
    <code className="whitespace-pre-wrap break-words bg-gray-800 text-white p-4 rounded-md overflow-auto max-h-60">
      {encodedText}
    </code>
  </div>
);

export default Encoder;

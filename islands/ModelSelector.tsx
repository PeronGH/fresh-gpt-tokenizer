import { FunctionComponent } from "preact";
import { model } from "@/signals/tokenizer.ts";
import { MODEL_LIST } from "@/constants/models.ts";
import { TiktokenModel } from "tiktoken";
import { IS_BROWSER } from "$fresh/runtime.ts";

const ModelSelector: FunctionComponent = () => (
  <div className="flex flex-col p-4">
    <label htmlFor="model-selector" className="mb-2 font-bold text-gray-700">
      Select a model:
    </label>
    <select
      id="model-selector"
      value={model}
      onChange={(e) => model.value = e.currentTarget.value as TiktokenModel}
      className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
      disabled={!IS_BROWSER}
    >
      {MODEL_LIST.map((model) => (
        <option key={model} value={model}>
          {model}
        </option>
      ))}
    </select>
  </div>
);

export default ModelSelector;

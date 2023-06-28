import { Head } from "$fresh/runtime.ts";
import Encoder from "@/islands/Encoder.tsx";
import ModelSelector from "@/islands/ModelSelector.tsx";

export default function Tokenizer() {
  return (
    <>
      <Head>
        <title>GPT Tokenizer</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <ModelSelector />
        <Encoder />
      </div>
    </>
  );
}

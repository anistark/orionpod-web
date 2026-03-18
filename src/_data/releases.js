export default [
  {
    version: "0.2.1-rc1",
    codename: "Kusanagi",
    date: "2026-03-18",
    latest: true,
    stable: false,
    deprecated: false,
    notes:
      "First public alpha release. Metal GPU acceleration, HuggingFace model browser, real-time observability.",
    changelog: [
      {
        type: "added",
        items: [
          "Metal GPU acceleration for Apple Silicon (M1/M2/M3/M4)",
          "Built-in HuggingFace model browser with hardware compatibility filtering",
          "GGUF model support — Mistral, DeepSeek, Qwen, Kimi, Llama, Gemma and more",
          "Real-time observability dashboard: tokens/s, memory, latency, GPU usage",
          "Chat interface with markdown rendering",
          "Model parameter controls (temperature, context length, top-p, top-k)",
          "Auto-detect system hardware and filter incompatible models",
        ],
      },
      {
        type: "technical",
        items: [
          "Built with Rust + Metal — ~30 MB app size",
          "Starts in under 2 seconds, <50 MB RAM idle",
          "Universal binary (Apple Silicon + Intel)",
          "Zero telemetry, zero analytics, zero cloud dependencies",
        ],
      },
    ],
    assets: [
      {
        os: "macOS",
        arch: "Universal (Apple Silicon + Intel)",
        filename: "OrionPod_0.2.1_universal.dmg",
        url: "https://github.com/anistark/orionpod-web/releases/download/v0.2.1-rc1/OrionPod_0.2.1_universal.dmg",
        size: "~30 MB",
      },
    ],
  },
];

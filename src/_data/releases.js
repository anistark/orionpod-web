export default [
  {
    version: "0.2.1-rc1",
    codename: "Kusanagi",
    date: "2026-03-18",
    latest: true,
    stable: false,
    deprecated: false,
    notes:
      "First public release. Metal GPU acceleration, HuggingFace model browser, real-time observability.",
    changelog: [
      {
        type: "changes",
        items: [
          "Chat interface with streaming responses and markdown rendering",
          "HuggingFace model browser with hardware compatibility filtering",
          "GGUF model support — download from HuggingFace or upload local files",
          "Real-time observability dashboard (tokens/s, memory, latency, GPU usage)",
          "Metal GPU acceleration on Apple Silicon",
          "Model parameter controls (temperature, context length, top-p, top-k)",
          "Toast notifications and user-friendly error messages",
          "Glassmorphism UI with macOS vibrancy",
        ],
      },
      {
        type: "for geeks",
        items: [
          "Tauri v2 + React + TypeScript + Rust + llama.cpp",
          "orion-core agent harness crate (backend-agnostic)",
          "Universal macOS binary (Apple Silicon + Intel), ~30 MB",
          "Starts in under 2 seconds, <50 MB RAM idle",
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

export default [
  {
    version: "0.2.2-alpha",
    codename: "Ed",
    date: "2026-03-19",
    latest: true,
    stable: false,
    deprecated: false,
    notes: "Your models, your rules",
    changelog: [
      {
        type: "changes",
        items: [
          "GGUF metadata extraction — model cards now show parameter count, context length, and architecture",
          "Runtime controls — functional thread count, temperature, and context length sliders in Settings",
          "Chat template auto-detection from GGUF metadata with manual override dropdown (ChatML, Llama 3, Mistral, Gemma, Phi-3, DeepSeek, etc.)",
          "Context overflow handling — oldest messages automatically pruned when conversation exceeds context window",
          "Model status events — real-time loading/ready/error/unloaded status via Tauri events",
          "Update notification toast with download button when a new version is available",
          "Actionable toast notifications (toasts can now have clickable action buttons)",
        ],
      },
      {
        type: "for geeks",
        items: [
          "`GgufModelInfo` struct with full GGUF header metadata (params, layers, heads, embedding dim, architecture, chat template)",
          "`InferenceEngine::format_prompt()` uses `apply_chat_template()` from llama.cpp with ChatML fallback",
          "`InferenceEngine::truncate_to_fit()` for pair-wise context pruning",
          "`model-status` Tauri event channel with `ModelStatusEvent` payload",
          "`AppConfig` extended with `chat_template` option for manual override",
          "`generate()` accepts configurable `n_threads` and `context_length` from config",
          "`ModelMetadata` enriched with `context_length`, `architecture`, `chat_template` fields (backward-compatible via `#[serde(default)]`)",
          "Auto-update check via `https://orionpod.com/api/latest.json` on app launch",
          "`check_for_updates` Rust IPC command with semver-aware version comparison",
          "`useUpdateCheck` hook (5s delayed, silent fail, non-blocking)",
          "`update-web-release.cjs` script for automated release metadata updates",
          "Changelog auto-extraction from `CHANGELOG.md` into `releases.js`",
        ],
      },
    ],
    assets: [
      {
        os: "macOS",
        arch: "Universal (Apple Silicon + Intel)",
        filename: "OrionPod_0.2.2_universal.dmg",
        url: "https://github.com/anistark/orionpod-web/releases/download/v0.2.2-alpha/OrionPod_0.2.2_universal.dmg",
        size: "~24 MB",
      },
    ],
  },
  {
    version: "0.2.1-rc1",
    codename: "Kusanagi",
    date: "2026-03-18",
    latest: false,
    stable: false,
    deprecated: false,
    notes: "First public release. Metal GPU acceleration, HuggingFace model browser, real-time observability.",
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

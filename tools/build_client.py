"""Build lib/client.js: inline 96px round avatars into the client template."""
import base64
import json
from io import BytesIO
from pathlib import Path

from PIL import Image

root = Path(__file__).resolve().parent.parent
avatars = root / "avatars"
template = (root / "src" / "client-template.js").read_text(encoding="utf-8")

ids = ["deepseek", "chatgpt", "claude", "gemini", "qwen", "kimi", "doubao", "glm"]
data = {}
for name in ids:
    path = avatars / f"{name}-round.png"
    im = Image.open(path).convert("RGBA").resize((96, 96), Image.LANCZOS)
    buffer = BytesIO()
    im.save(buffer, format="PNG", optimize=True)
    data[name] = "data:image/png;base64," + base64.b64encode(buffer.getvalue()).decode("ascii")

out = template.replace("__AVATAR_DATA__", json.dumps(data, ensure_ascii=False))
target = root / "lib" / "client.js"
target.write_text(out, encoding="utf-8")
print("built", target, target.stat().st_size, "bytes,", len(data), "avatars")

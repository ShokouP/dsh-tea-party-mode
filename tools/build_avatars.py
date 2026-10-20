"""Cut the eight character avatars from ready-made art (optional dev helper).

The original images are NOT shipped in this repository (see NOTICE.md). Put the
sources you are allowed to use into `avatars/_src/` first, then run:

    python tools/build_avatars.py
"""
from pathlib import Path

from PIL import Image, ImageDraw

root = Path(__file__).resolve().parent.parent
src = root / "avatars" / "_src"
out = root / "avatars"

plan = {
    "deepseek": ("deepseek-c.webp", "deepseek-c"),
    "chatgpt": ("gpt.webp", "gpt-front"),
    "claude": ("claude.webp", "top"),
    "gemini": ("gemini.webp", "top"),
    "qwen": ("qwen.webp", "top"),
    "kimi": ("kimi.webp", "top"),
    "doubao": ("doubao-official.jpg", "icon"),
    "glm": ("glm-official.jpg", "icon"),
}

AVATAR = 512


def crop_box(im: Image.Image, mode: str):
    w, h = im.size
    if mode == "top":
        side = min(w, round(0.40 * h))
        x0 = (w - side) // 2
        y0 = max(0, round(0.015 * h))
        return (x0, y0, x0 + side, y0 + side)
    if mode == "gpt-front":
        side = round(0.39 * h)
        x0 = round(0.19 * w) - side // 2
        y0 = round(0.05 * h)
        return (x0, max(0, y0), x0 + side, y0 + side)
    if mode == "deepseek-c":
        side = round(0.62 * w)
        x0 = round(0.43 * w) - side // 2
        y0 = round(0.52 * h) - side // 2
        return (max(0, x0), max(0, y0), max(0, x0) + side, max(0, y0) + side)
    raise ValueError(mode)


def make_round(im: Image.Image, size: int) -> Image.Image:
    big = size * 4
    mask = Image.new("L", (big, big), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, big - 1, big - 1), fill=255)
    mask = mask.resize((size, size), Image.LANCZOS)
    rounded = im.convert("RGBA")
    rounded.putalpha(mask)
    return rounded


for name, (file, mode) in plan.items():
    im = Image.open(src / file).convert("RGB")
    if mode == "icon":
        side = min(im.size)
        x0 = (im.width - side) // 2
        y0 = (im.height - side) // 2
        im = im.crop((x0, y0, x0 + side, y0 + side))
    else:
        im = im.crop(crop_box(im, mode))
    im = im.resize((AVATAR, AVATAR), Image.LANCZOS)
    im.save(out / f"{name}.png")
    make_round(im, AVATAR).save(out / f"{name}-round.png")
    print("wrote", out / f"{name}.png")

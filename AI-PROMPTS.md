# APTA-G Scientific — AI Image & Video Prompt Pack

Use these with **Grok Imagine**, Midjourney, Flux, Kling, Runway, Luma, etc.

**Brand lock (use in every still prompt):**
- Palette: deep void navy `#05080F`, bioluminescent cyan `#3DCEC4`, soft violet `#7B74D6`, frost white `#E6EEF8`
- Mood: premium biotech, OLED dark, cinematic 3D, scientific but luxurious
- Rules: **no text, no logos, no watermarks, no readable labels, no people** (unless a prompt explicitly asks for hands only)

**Save files as:**

| File | Ratio | Site use |
|------|-------|----------|
| `hero-helix.png` | 1:1 | Hero right panel |
| `dna-aptamer.png` | 4:3 | Products — DNA |
| `peptide-aptamer.png` | 4:3 | Products — peptide |
| `custom-selection.png` | 4:3 | Products — custom |
| `feature-bind.png` | 1:1 or 16:9 | Features / atmosphere |
| `lab-night.png` | 16:9 | Careers CTA / wide banner |
| `affinity-macro.png` | 1:1 | Small metric / detail cards |
| `process-orbit.png` | 16:9 | Optional process strip |

Drop finished assets into:
`public/imagine/`  
(same filenames as above)

---

## Part A — Still image prompts

### 1. Hero helix — `hero-helix.png` (1:1)

```
Cinematic ultra-premium biotech still: a luminous DNA double helix floating in deep void navy space (#05080F), strands glowing soft bioluminescent cyan (#3DCEC4) and muted violet (#7B74D6), fine molecular nodes like glass beads, subtle volumetric fog, soft bokeh particles, photorealistic 3D scientific visualization, dramatic rim light from upper right, clean negative space at bottom for UI overlay, no text, no logos, no watermark.
```

**Alt (more abstract / less literal DNA):**
```
Abstract precision-binding visualization: two interwoven luminous ribbons forming a helix-like structure in deep navy void, cyan and violet light trails, specular glass surfaces, ultra clean luxury science aesthetic, shallow depth of field, museum-grade product lighting, square composition, no text, no logos.
```

---

### 2. DNA aptamer product — `dna-aptamer.png` (4:3)

```
Premium scientific product visualization of a DNA aptamer strand docking into a protein target pocket, dark OLED black background, cyan primary glow with soft violet secondary light, glass-like molecular surfaces, high-end biotech magazine render, soft volumetric lighting from the left, crisp focus on the binding interface, 4:3 composition, no text, no labels, no watermark.
```

---

### 3. Peptide aptamer product — `peptide-aptamer.png` (4:3)

```
Premium scientific visualization of a short peptide aptamer scaffold interlocking with a protein surface, deep void navy background, soft violet and teal bioluminescence, crystalline peptide ribbon with subtle specular highlights, ultra refined biotech 3D render, cinematic studio lighting, elegant negative space, 4:3 frame, no text, no logos, no watermark.
```

---

### 4. Custom selection — `custom-selection.png` (4:3)

```
Abstract scientific visualization of custom aptamer selection: many candidate molecules orbiting a central glowing target protein, successful cyan paths converging inward, discarded violet trails fading outward, deep void navy background, premium biotech 3D render, orbital rings of light, calm and precise mood, 4:3 composition, no text, no logos, no watermark.
```

---

### 5. Feature abstract bind — `feature-bind.png` (1:1)

```
Abstract macro close-up of glowing aptamer-like strands weaving through a dark fluid medium like liquid metal and light, deep navy-black background, electric cyan highlights and soft purple secondary glow, extremely sharp detail, high-end abstract science art for website feature cards, square crop, no text, no watermark.
```

---

### 6. Lab night (careers / banner) — `lab-night.png` (16:9)

```
Futuristic biotech research laboratory interior at night, dark glass surfaces and matte black workbenches, holographic molecular displays in cyan and violet, subtle fog and soft light rays, premium architectural photography style, OLED black palette with teal and muted purple accents, empty room with no people, wide cinematic 16:9 frame, no text, no logos, no watermark.
```

---

### 7. Affinity macro detail — `affinity-macro.png` (1:1)

```
Extreme macro still of a single binding node: a small cyan glowing molecular bead connected by a thin luminous filament to a violet node, floating in deep navy void, soft radial glow, ultra shallow depth of field, luxury scientific jewelry aesthetic, square composition, no text, no logos.
```

---

### 8. Process / SELEX orbit — `process-orbit.png` (16:9)

```
Wide cinematic scientific diagram-as-art (no readable text): three stages of molecular selection shown as glowing orbits around a central target — loose cloud of candidates on the left, filtering ring in the center, tight precise binder on the right — cyan success path, violet noise fading, deep void navy, premium 3D render, 16:9, no letters, no numbers, no logos.
```

---

### 9. Optional contact atmosphere — `contact-field.png` (16:9)

```
Quiet atmospheric biotech field of faint helix fragments and soft cyan particles dissolving into deep navy darkness, elegant and spacious, low contrast, premium website background plate, wide 16:9, extremely clean, no text, no logos, no watermark.
```

---

## Part B — Animation pairs (image first, then video)

Workflow for every pair:
1. Generate the **still** with the **Image (frame 1)** prompt  
2. Animate that still with the **Video** prompt (image-to-video)  
3. Prefer **6 seconds**, gentle motion, one camera idea only  

---

### Pair 1 — Hero loop

**Save still as:** `hero-helix.png`  
**Save video as:** `hero-helix.mp4`

**Image (frame 1)**
```
Cinematic ultra-premium biotech still: luminous DNA double helix centered in deep void navy, cyan and violet glowing strands, glass molecular nodes, soft volumetric fog, dramatic rim light, square 1:1, frozen calm moment, no text, no logos.
```

**Video (animate the still)**
```
Slow gentle orbital camera drift around the glowing helix, soft particle drift, subtle pulse of cyan and violet light, calm scientific atmosphere, no sudden moves, no morphing into other objects.
```

**Video alt (safer for complex geometry)**
```
Very slow push-in toward the helix center, barely moving camera, only light intensity and floating dust particles animate, stable structure, premium lab-demo feel.
```

---

### Pair 2 — DNA binding

**Still:** `dna-aptamer.png` → **Video:** `dna-aptamer.mp4`

**Image (frame 1)**
```
Premium 3D still of a cyan DNA aptamer strand approaching a protein pocket, deep black background, violet secondary light, glass surfaces, 4:3, frozen just before full dock, no text.
```

**Video**
```
Subtle docking motion: the aptamer strand slowly settles into the protein pocket with a soft cyan flash at contact, camera holds steady with tiny parallax, elegant and slow, 6 seconds.
```

---

### Pair 3 — Peptide scaffold

**Still:** `peptide-aptamer.png` → **Video:** `peptide-aptamer.mp4`

**Image (frame 1)**
```
Still of a violet-teal peptide ribbon resting on a protein surface, deep navy void, crystalline highlights, 4:3 premium biotech render, no text.
```

**Video**
```
Slow lateral camera slide across the peptide–protein interface, gentle shimmer along the peptide ribbon, soft light breathing, no structural chaos, cinematic macro feel.
```

---

### Pair 4 — Selection orbits

**Still:** `custom-selection.png` → **Video:** `custom-selection.mp4`

**Image (frame 1)**
```
Still of candidate molecules orbiting a central target, cyan inbound paths, violet fading trails, deep navy, 4:3, no text.
```

**Video**
```
Slow orbit of outer particles around the center target, a few cyan candidates drift inward, violet ones fade outward, smooth circular motion, calm and continuous, no text appearing.
```

---

### Pair 5 — Abstract weave (background / features)

**Still:** `feature-bind.png` → **Video:** `feature-bind.mp4`

**Image (frame 1)**
```
Abstract macro of glowing cyan and violet strands woven in dark fluid, square frame, sharp detail, no text.
```

**Video**
```
Gentle flowing motion of the luminous strands as if suspended in liquid, slow undulation, soft light pulses, camera almost locked, hypnotic and premium.
```

---

### Pair 6 — Lab atmosphere (careers)

**Still:** `lab-night.png` → **Video:** `lab-night.mp4`

**Image (frame 1)**
```
Empty futuristic biotech lab at night, holographic molecular display glowing cyan-violet, dark glass, wide 16:9, no people, no text.
```

**Video**
```
Very slow push into the lab toward the holographic display, soft fog drift, hologram light gently flickers and rotates, quiet atmospheric shot, no people entering.
```

---

### Pair 7 — Affinity node (micro loop)

**Still:** `affinity-macro.png` → **Video:** `affinity-macro.mp4`

**Image (frame 1)**
```
Macro still of two glowing nodes connected by a luminous filament in deep navy void, square, jewelry-like science aesthetic, no text.
```

**Video**
```
Soft pulse of light traveling along the filament between the two nodes, minimal camera drift, elegant and simple, perfect short loop.
```

---

## Part C — Copy-paste cheat sheet (style suffix)

Append this to any tool that needs a short style booster:

```
deep void navy, bioluminescent cyan and soft violet, premium biotech 3D, OLED dark, cinematic rim light, no text, no logos, no watermark
```

Negative-style notes (only if your tool supports negatives):
```
text, watermark, logo, UI, chart labels, cartoon, oversaturated neon, cluttered composition, distorted anatomy, extra limbs
```

---

## Part D — Recommended generation settings

| Asset type | Aspect | Notes |
|------------|--------|--------|
| Hero still + loop | 1:1 | Highest priority |
| Product cards | 4:3 | Consistent lighting direction across all three |
| Banner / careers | 16:9 | Keep empty of people for clean overlays |
| Video length | 6s | Prefer short loops; extend only if tool is stable |
| Motion strength | Low–medium | Complex molecules warp if motion is aggressive |

**Consistency tip:** Generate `hero-helix` first. For other stills, keep the same palette words and “premium biotech 3D / void navy” so the set feels like one brand world.

**Site integration tip (when you have files):**
1. Put PNGs/MP4s in `public/imagine/`
2. Tell me “assets ready” and I will wire them into the hero, products, features, and CTA

---

## Part E — Priority order (if you only make a few)

1. **hero-helix** still + video (biggest impact)  
2. **dna-aptamer**, **peptide-aptamer**, **custom-selection** stills  
3. **lab-night** still (+ optional video for CTA)  
4. **feature-bind** still for depth  

That set alone will transform the site.

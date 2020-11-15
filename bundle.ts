const [diagnostics, emit] = await Deno.bundle('./mount.tsx')
await Deno.writeTextFile('./index.bundle.js', emit)

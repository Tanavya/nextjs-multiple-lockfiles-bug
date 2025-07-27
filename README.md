# Steps to Reproduce

1. bun install - this also installs dependencies in frontend due to the postinstall
2. cd frontend
3. bun run dev
```
$ next dev --turbopack
 ⚠ Warning: Found multiple lockfiles. Selecting /Users/tanavya/Development/WealthyPlanetDev/multiple-lockfiles-bug/bun.lockb.
   Consider removing the lockfiles at:
   * /Users/tanavya/Development/WealthyPlanetDev/multiple-lockfiles-bug/frontend/bun.lockb

   ▲ Next.js 15.4.4 (Turbopack)
   - Local:        http://localhost:3000
   - Network:      http://10.0.0.227:3000

 ✓ Starting...
 ✓ Ready in 1341ms
```
4. Try playing around with `nextConfig.turbopack.root` but nothing works!

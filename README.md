# How to use

1. make `env.ts` file

```typescript
export const WEBHOOK_SECRET_TOKEN = "xxxxxx";
export const WEBHOOK_VERIFICATION_TOKEN = "yyyyyy";
```

2. make `ltlist.json` file

```json
{
  "presenters": [
    {
      "name": "Presenter 1",
      "title": "LTタイトル"
    },
    {
      "name": "Presenter 2",
      "title": "LT title"
    }
  ]
}
```

3. execute the following commands

```sh
mkdir nodecg && cd nodecg
npx nodecgv2.5.3 setup
cd bundles
git clone https://github.com/KeishiS/lt-bundle && cd lt-bundle
NIXPKGS_ALLOW_UNFREE=1 nix develop --impure
cd ../..
npx nodecg start
```

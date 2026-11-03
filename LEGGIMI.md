# Cromie degli intervalli: web app per iPhone

## Cosa c'è nella cartella

- `index.html`: l'app.
- `manifest.webmanifest`: nome, icona e avvio a schermo intero.
- `sw.js`: salva l'app sul telefono, così funziona anche senza rete.
- `icons/`: le icone. La ruota degli intervalli ha il pallino della tonica al centro.

## Pubblicarla su GitHub Pages (gratis, circa 10 minuti)

1. Accedi a github.com e crea un repository pubblico chiamato `cromie` (pulsante **New**).
2. Nel repository vuoto scegli **uploading an existing file**. Trascina **il contenuto** della cartella: i tre file più la cartella `icons`. Poi premi **Commit changes**.
3. Vai su **Settings → Pages**. In **Source** scegli **Deploy from a branch**, poi il branch **main** e la cartella **/ (root)**, e premi **Save**.
4. Dopo un paio di minuti l'app è online all'indirizzo `https://TUO-UTENTE.github.io/cromie/`.

## Installarla sull'iPhone

1. Apri l'indirizzo con **Safari**. Da altri browser su iPhone l'installazione non funziona sempre.
2. Tocca **Condividi**, poi **Aggiungi alla schermata Home**.
3. Apri l'app dall'icona **Cromie** e tocca un intervallo almeno una volta mentre sei online. Da quel momento funziona anche senza rete.

Il suono esce anche con l'interruttore laterale su silenzioso. Il volume si regola con i tasti laterali.

## Aggiornarla

1. Sostituisci `index.html` nel repository.
2. In `sw.js` cambia `VERSIONE` (per esempio da `cromie-v1` a `cromie-v2`).
3. Chiudi e riapri l'app sull'iPhone: la nuova versione si carica al secondo avvio.

## Provarla sul Mac prima di pubblicarla

```
cd percorso/della/cartella
python3 -m http.server 8000
```

Poi apri `http://localhost:8000` nel browser. Per installarla sull'iPhone serve comunque l'indirizzo https di GitHub Pages.

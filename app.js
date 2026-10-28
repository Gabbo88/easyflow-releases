/* EasyFlow – landing page: lingua, tema, guide e dati dell'ultima release (GitHub) */
(function () {
  'use strict';

  var REPO = 'Gabbo88/easyflow-releases';
  var STR = {"meta.title": {"it": "EasyFlow – Le tue spese, registrate da sole", "en": "EasyFlow – Your expenses, logged automatically"}, "meta.desc": {"it": "EasyFlow legge le notifiche di banca e wallet, registra le spese e ti dice quanto puoi spendere oggi. Dati sul tuo telefono, app gratuita per Android, Windows, Mac e iPhone.", "en": "EasyFlow reads bank and wallet notifications, logs your expenses and tells you what you can spend today. Your data stays on your phone. Free app for Android, Windows, Mac and iPhone."}, "skip": {"it": "Vai al contenuto", "en": "Skip to content"}, "nav.features": {"it": "Funzioni", "en": "Features"}, "nav.ai": {"it": "AI", "en": "AI"}, "nav.compare": {"it": "Confronto", "en": "Compare"}, "nav.download": {"it": "Download", "en": "Download"}, "nav.guide": {"it": "Guida", "en": "Guide"}, "nav.privacy": {"it": "Privacy", "en": "Privacy"}, "nav.get": {"it": "Scarica", "en": "Download"}, "nav.theme": {"it": "Cambia tema", "en": "Toggle theme"}, "nav.lang": {"it": "Cambia lingua", "en": "Change language"}, "nav.sections": {"it": "Sezioni", "en": "Sections"}, "hero.eyebrow": {"it": "● Spese in automatico", "en": "● Automatic expense tracking"}, "hero.h1": {"it": "Le tue spese, <em>registrate da sole</em>.", "en": "Your expenses, <em>logged on their own</em>."}, "hero.lead": {"it": "EasyFlow legge le notifiche della tua banca e del tuo wallet e ti dice quanto puoi spendere oggi. I dati restano sul tuo telefono, e quando una notifica non è chiara decidi tu.", "en": "EasyFlow reads your bank and wallet notifications and tells you how much you can spend today. Your data stays on your phone, and when a notification is unclear, you decide."}, "hero.android": {"it": "Scarica per Android", "en": "Download for Android"}, "hero.others": {"it": "Altre piattaforme", "en": "Other platforms"}, "hero.version": {"it": "Versione", "en": "Version"}, "hero.free": {"it": "Gratis", "en": "Free"}, "hero.langs": {"it": "Italiano e inglese", "en": "Italian and English"}, "hero.themes": {"it": "Tema chiaro e scuro", "en": "Light and dark theme"}, "phone.notif.t": {"it": "Nuovo movimento rilevato", "en": "New transaction detected"}, "phone.notif.d": {"it": "Supermercato · € 23,10", "en": "Supermarket · € 23.10"}, "phone.spendable": {"it": "Spendibile oggi", "en": "Spendable today"}, "phone.income": {"it": "Entrate", "en": "Income"}, "phone.expenses": {"it": "Uscite", "en": "Expenses"}, "phone.review": {"it": "1 movimento da rivedere · Rivedi ›", "en": "1 transaction to review · Review ›"}, "phone.groceries": {"it": "Supermercato", "en": "Supermarket"}, "phone.groceries.cat": {"it": "Spesa", "en": "Groceries"}, "phone.transport": {"it": "Trasporti", "en": "Transport"}, "phone.transport.cat": {"it": "Mobilità", "en": "Mobility"}, "phone.bar": {"it": "Bar", "en": "Café"}, "phone.bar.cat": {"it": "Ristoranti", "en": "Dining"}, "feat.h2": {"it": "Quello che fa, senza giri di parole", "en": "What it does, plainly"}, "feat.sub": {"it": "Funzioni pensate per chi vuole tenere sotto controllo le spese senza inserire tutto a mano.", "en": "Built for people who want to keep spending under control without typing everything in."}, "feat.notif.t": {"it": "Lettura delle notifiche", "en": "Notification reading"}, "feat.notif.d": {"it": "Importo ed esercente arrivano dalle notifiche di banche e wallet che scegli tu. Un piccolo modello addestrato da noi, che gira sul telefono, aiuta a riconoscere i casi meno chiari. Se non è sicuro, finisce in “Da rivedere”. Su iPhone i pagamenti arrivano dai Comandi Rapidi di Apple.", "en": "Amount and merchant come from the notifications of the banks and wallets you choose. A small model we trained, running on your phone, helps with the less obvious cases. If it isn't sure, it goes to “To review”. On iPhone, payments arrive through Apple's Shortcuts."}, "feat.spend.t": {"it": "Spendibile oggi", "en": "Spendable today"}, "feat.spend.d": {"it": "Una cifra sola: quanto puoi spendere oggi tenendo conto di abbonamenti, scadenze e budget.", "en": "One number: how much you can spend today, considering subscriptions, due dates and budgets."}, "feat.ocr.t": {"it": "Scontrini con OCR", "en": "Receipts with OCR"}, "feat.ocr.d": {"it": "Fotografi lo scontrino e l'app compila il movimento, unendolo a quello già rilevato.", "en": "Snap a receipt and the app fills in the transaction, merging it with the one already detected."}, "feat.ai.t": {"it": "AI facoltativa", "en": "Optional AI"}, "feat.ai.d": {"it": "Con la tua chiave API di Google (Gemini) ottieni consigli sulle spese e una lettura più precisa dei casi difficili.", "en": "With your own Google (Gemini) API key you get spending advice and more accurate reading of difficult cases."}, "feat.data.t": {"it": "Dati tuoi", "en": "Your data"}, "feat.data.d": {"it": "Database cifrato sul dispositivo, blocco con impronta o volto, modalità privacy che nasconde gli importi.", "en": "Encrypted database on your device, fingerprint or face lock, and a privacy mode that hides amounts."}, "feat.sync.t": {"it": "Sincronizzazione cifrata", "en": "Encrypted sync"}, "feat.sync.d": {"it": "Più dispositivi e spazio condiviso in famiglia, con chiavi che restano nelle tue mani.", "en": "Several devices and a shared family space, with keys that stay in your hands."}, "ai.h2": {"it": "AI facoltativa, con la tua chiave Google", "en": "Optional AI, with your own Google key"}, "ai.lead": {"it": "Puoi usare l'assistente AI di EasyFlow con una tua chiave API di Google (Gemini). Se non la inserisci, l'app funziona lo stesso.", "en": "You can use EasyFlow's AI assistant with your own Google (Gemini) API key. If you don't add one, the app works just the same."}, "ai.fine": {"it": "Con la chiave, i testi che scegli di far analizzare vanno a Google con la tua chiave e restano soggetti alle condizioni del tuo account Google. Il piano gratuito di Google AI Studio ha dei limiti: controlla le condizioni attuali.", "en": "With a key, the text you choose to have analysed is sent to Google using your key and stays subject to your Google account's terms. Google AI Studio's free plan has limits: check the current terms."}, "ai.s1.t": {"it": "1. Crea la chiave", "en": "1. Create the key"}, "ai.s1.d": {"it": "Nel sito di Google AI Studio, con il tuo account Google.", "en": "On the Google AI Studio website, with your Google account."}, "ai.s2.t": {"it": "2. Incollala nelle Impostazioni", "en": "2. Paste it in Settings"}, "ai.s2.d": {"it": "La chiave resta nell'archivio protetto del dispositivo.", "en": "The key stays in the device's protected storage."}, "ai.s3.t": {"it": "3. Chiedi, e basta", "en": "3. Just ask"}, "ai.s3.d": {"it": "Consigli sulle spese, scontrini difficili e notifiche poco chiare.", "en": "Spending advice, hard receipts and unclear notifications."}, "cmp.h2": {"it": "EasyFlow in confronto", "en": "EasyFlow compared"}, "cmp.sub": {"it": "Come si differenzia dalle quattro strade più comuni per tenere i conti sotto controllo.", "en": "How it differs from the four most common ways to keep track of your money."}, "cmp.col.feature": {"it": "Funzione", "en": "Feature"}, "cmp.col.us": {"it": "EasyFlow", "en": "EasyFlow"}, "cmp.col.manual": {"it": "Inserimento manuale", "en": "Manual entry"}, "cmp.col.linked": {"it": "App collegate alla banca", "en": "Bank-linked apps"}, "cmp.col.bank": {"it": "App della tua banca", "en": "Your bank's app"}, "cmp.r1": {"it": "Registra le spese da solo", "en": "Logs expenses automatically"}, "cmp.r1.us": {"it": "Dalle notifiche", "en": "From notifications"}, "cmp.r1.manual": {"it": "No", "en": "No"}, "cmp.r1.linked": {"it": "Dal conto", "en": "From the account"}, "cmp.r1.bank": {"it": "Solo i suoi conti", "en": "Only its own accounts"}, "cmp.r2": {"it": "Più banche e wallet insieme", "en": "Several banks and wallets together"}, "cmp.r2.us": {"it": "Sì", "en": "Yes"}, "cmp.r2.manual": {"it": "Sì, a mano", "en": "Yes, by hand"}, "cmp.r2.linked": {"it": "Se supportate", "en": "If supported"}, "cmp.r2.bank": {"it": "Solo una", "en": "Just one"}, "cmp.r3": {"it": "Non serve dare accesso ai conti a terzi", "en": "No third-party access to your accounts"}, "cmp.r3.us": {"it": "Sì", "en": "Yes"}, "cmp.r3.manual": {"it": "Sì", "en": "Yes"}, "cmp.r3.linked": {"it": "Serve il consenso", "en": "Consent required"}, "cmp.r3.bank": {"it": "Sì", "en": "Yes"}, "cmp.r4": {"it": "Dati sul tuo dispositivo", "en": "Data on your device"}, "cmp.r4.us": {"it": "Sì, cifrati", "en": "Yes, encrypted"}, "cmp.r4.manual": {"it": "Dipende", "en": "Depends"}, "cmp.r4.linked": {"it": "Di solito online", "en": "Usually online"}, "cmp.r4.bank": {"it": "Sui server della banca", "en": "On the bank's servers"}, "cmp.r5": {"it": "Senza registrazione", "en": "No sign-up needed"}, "cmp.r5.us": {"it": "Sì", "en": "Yes"}, "cmp.r5.manual": {"it": "Dipende", "en": "Depends"}, "cmp.r5.linked": {"it": "Account richiesto", "en": "Account required"}, "cmp.r5.bank": {"it": "Serve essere clienti", "en": "Customers only"}, "cmp.r6": {"it": "Lettura degli scontrini", "en": "Receipt scanning"}, "cmp.r6.us": {"it": "Sì", "en": "Yes"}, "cmp.r6.manual": {"it": "Raramente", "en": "Rarely"}, "cmp.r6.linked": {"it": "Dipende", "en": "Depends"}, "cmp.r6.bank": {"it": "Raramente", "en": "Rarely"}, "cmp.r7": {"it": "AI con la tua chiave", "en": "AI with your own key"}, "cmp.r7.us": {"it": "Facoltativa", "en": "Optional"}, "cmp.r7.manual": {"it": "No", "en": "No"}, "cmp.r7.linked": {"it": "Dipende", "en": "Depends"}, "cmp.r7.bank": {"it": "Dipende", "en": "Depends"}, "cmp.r8": {"it": "Costo", "en": "Cost"}, "cmp.r8.us": {"it": "Gratis", "en": "Free"}, "cmp.r8.manual": {"it": "Varia", "en": "Varies"}, "cmp.r8.linked": {"it": "Spesso a pagamento", "en": "Often paid"}, "cmp.r8.bank": {"it": "Incluso nel conto", "en": "Included with the account"}, "cmp.note": {"it": "Indicazioni generali sulle categorie di app, non su prodotti specifici: le funzioni cambiano da app ad app.", "en": "General remarks about categories of apps, not specific products: features vary from app to app."}, "dl.h2": {"it": "Scarica EasyFlow", "en": "Download EasyFlow"}, "dl.sub": {"it": "Su Android l'app legge le notifiche da sola. Su iPhone i pagamenti arrivano dai Comandi Rapidi di Apple; su Windows e Mac si consultano e si inseriscono i movimenti.", "en": "On Android the app reads notifications by itself. On iPhone payments arrive through Apple's Shortcuts; on Windows and Mac you view and enter transactions."}, "dl.android": {"it": "Android", "en": "Android"}, "dl.windows": {"it": "Windows", "en": "Windows"}, "dl.mac": {"it": "Mac", "en": "Mac"}, "dl.iphone": {"it": "iPhone", "en": "iPhone"}, "dl.android.kind": {"it": "APK", "en": "APK"}, "dl.windows.kind": {"it": "Installer", "en": "Installer"}, "dl.mac.kind": {"it": "App", "en": "App"}, "dl.iphone.kind": {"it": "IPA · Sideloadly", "en": "IPA · Sideloadly"}, "dl.badge.full": {"it": "Completa", "en": "Full"}, "dl.badge.unsigned": {"it": "Non firmata", "en": "Unsigned"}, "dl.badge.exp": {"it": "Sperimentale", "en": "Experimental"}, "dl.badge.manual": {"it": "Manuale", "en": "Manual"}, "dl.get": {"it": "Scarica", "en": "Download"}, "dl.getapk": {"it": "Scarica APK", "en": "Download APK"}, "dl.guide": {"it": "Vedi la guida", "en": "See the guide"}, "dl.soon": {"it": "Non ancora disponibile", "en": "Not available yet"}, "dl.renew": {"it": "Da rinnovare ogni 7 giorni con un Apple ID gratuito", "en": "Needs renewing every 7 days with a free Apple ID"}, "dl.sha": {"it": "SHA-256", "en": "SHA-256"}, "dl.verify": {"it": "Per verificare il file: confronta il valore SHA-256 con quello del file scaricato.", "en": "To verify a file: compare the SHA-256 value with the one of the downloaded file."}, "dl.notes": {"it": "Novità di questa versione", "en": "What's new in this version"}, "dl.allreleases": {"it": "Tutte le versioni", "en": "All versions"}, "gd.h2": {"it": "Come si installa", "en": "How to install"}, "gd.sub": {"it": "Pochi passi per ogni dispositivo.", "en": "A few steps for each device."}, "gd.tabs": {"it": "Sistema operativo", "en": "Operating system"}, "gd.a1.t": {"it": "Scarica il file APK", "en": "Download the APK file"}, "gd.a1.d": {"it": "Dal pulsante qui sopra, direttamente dal telefono.", "en": "With the button above, straight from your phone."}, "gd.a2.t": {"it": "Consenti l'installazione", "en": "Allow the installation"}, "gd.a2.d": {"it": "Android chiede il permesso per “installare app sconosciute” dal browser che hai usato. Concedilo, poi apri il file scaricato e tocca Installa. Se compare un avviso di Play Protect, scegli di installare comunque.", "en": "Android asks for permission to “install unknown apps” from the browser you used. Grant it, then open the downloaded file and tap Install. If a Play Protect warning appears, choose to install anyway."}, "gd.a3.t": {"it": "Apri EasyFlow e concedi l'accesso alle notifiche", "en": "Open EasyFlow and allow notification access"}, "gd.a3.d": {"it": "Serve per leggere i pagamenti: scegli tu quali app monitorare.", "en": "It's needed to read payments: you choose which apps to monitor."}, "gd.a4.t": {"it": "Gli aggiornamenti", "en": "Updates"}, "gd.a4.d": {"it": "L'app controlla da sola se c'è una versione nuova e te lo segnala.", "en": "The app checks for new versions by itself and lets you know."}, "gd.w1.t": {"it": "Scarica l'installer", "en": "Download the installer"}, "gd.w1.d": {"it": "Un solo file, <code>EasyFlow-…-Windows-Setup.exe</code>, dal pulsante qui sopra. Contiene già tutto quello che serve: non devi installare altri programmi. Funziona su Windows 10 e 11 a 64 bit.", "en": "A single file, <code>EasyFlow-…-Windows-Setup.exe</code>, from the button above. It already contains everything it needs: no other programs to install. Works on 64-bit Windows 10 and 11."}, "gd.w2.t": {"it": "Installa", "en": "Install"}, "gd.w2.d": {"it": "Apri il file e segui i passaggi: non servono permessi di amministratore. Se compare “Windows ha protetto il PC”, scegli “Ulteriori informazioni” e poi “Esegui comunque”: succede perché l'app non è ancora firmata.", "en": "Open the file and follow the steps: no administrator rights needed. If “Windows protected your PC” appears, choose “More info” and then “Run anyway”: it happens because the app isn't signed yet."}, "gd.w3.t": {"it": "Apri EasyFlow", "en": "Open EasyFlow"}, "gd.w3.d": {"it": "La trovi nel menu Start, e sul desktop se hai scelto il collegamento. Per avere gli stessi movimenti del telefono attiva la sincronizzazione (Altro → Sincronizzazione e famiglia) oppure ripristina un backup.", "en": "You'll find it in the Start menu, and on the desktop if you chose the shortcut. To see the same transactions as on your phone, turn on sync (More → Sync &amp; Family) or restore a backup."}, "gd.w4.t": {"it": "Cosa fa su Windows", "en": "What it does on Windows"}, "gd.w4.d": {"it": "Consulti i movimenti, ne inserisci di nuovi e gestisci conti, obiettivi e patrimonio. La lettura automatica delle notifiche è solo su Android.", "en": "You view transactions, add new ones and manage accounts, goals and wealth. Automatic notification reading is Android-only."}, "gd.w5.t": {"it": "Aggiornare o disinstallare", "en": "Update or uninstall"}, "gd.w5.d": {"it": "Per aggiornare scarica la nuova versione e installala sopra quella vecchia: i tuoi dati restano. Per disinstallare: Impostazioni → App → EasyFlow.", "en": "To update, download the new version and install it over the old one: your data stays. To uninstall: Settings → Apps → EasyFlow."}, "gd.m1.t": {"it": "Scarica e sposta in Applicazioni", "en": "Download and move to Applications"}, "gd.m1.d": {"it": "Decomprimi il file scaricato e trascina l'app nella cartella Applicazioni.", "en": "Unzip the download and drag the app to the Applications folder."}, "gd.m2.t": {"it": "Primo avvio", "en": "First launch"}, "gd.m2.d": {"it": "Se macOS blocca l'app perché non è notarizzata, fai clic destro sull'app → “Apri”, oppure vai in Impostazioni di Sistema → Privacy e sicurezza e scegli “Apri comunque”.", "en": "If macOS blocks the app because it isn't notarised, right-click the app → “Open”, or go to System Settings → Privacy & Security and choose “Open Anyway”."}, "gd.m3.t": {"it": "Versione sperimentale", "en": "Experimental version"}, "gd.m3.d": {"it": "Su Mac l'app serve a consultare e inserire i movimenti, come su Windows. Non è ancora stata provata come le altre.", "en": "On Mac the app is for viewing and entering transactions, like on Windows. It has not been tested as thoroughly as the others."}, "gd.i1.t": {"it": "Prepara il computer", "en": "Get your computer ready"}, "gd.i1.d": {"it": "Installa Sideloadly (sideloadly.io). Su Windows serve anche iTunes, nella versione scaricata dal sito di Apple.", "en": "Install Sideloadly (sideloadly.io). On Windows you also need iTunes, the version downloaded from Apple's website."}, "gd.i2.t": {"it": "Collega l'iPhone e carica il file IPA", "en": "Connect your iPhone and load the IPA"}, "gd.i2.d": {"it": "Trascina il file .ipa in Sideloadly, inserisci un Apple ID (meglio uno creato solo per questo) e premi Start.", "en": "Drag the .ipa file into Sideloadly, enter an Apple ID (ideally one created just for this) and press Start."}, "gd.i3.t": {"it": "Autorizza l'app sull'iPhone", "en": "Trust the app on your iPhone"}, "gd.i3.d": {"it": "Impostazioni → Generali → VPN e gestione dispositivo: tocca il tuo Apple ID e scegli “Autorizza”. Su iOS 16 e successivi attiva anche Impostazioni → Privacy e sicurezza → Modalità sviluppatore.", "en": "Settings → General → VPN & Device Management: tap your Apple ID and choose “Trust”. On iOS 16 and later also turn on Settings → Privacy & Security → Developer Mode."}, "gd.i4.t": {"it": "Registra i pagamenti con i Comandi Rapidi", "en": "Log payments with Shortcuts"}, "gd.i4.d": {"it": "Su iPhone le notifiche delle altre app non si leggono direttamente: i pagamenti si passano a EasyFlow con l'app Comandi Rapidi di Apple. In EasyFlow, Altro → App monitorate, apri la guida per iPhone. In breve, crei un'automazione (per esempio su un pagamento con Apple Pay o su un SMS della banca) che apre EasyFlow con un link come <code>easyflow://pay?app=Satispay&amp;amount=5.00&amp;merchant=Bar</code> e il movimento viene registrato. Le automazioni disponibili dipendono dalla versione di iOS.", "en": "On iPhone other apps' notifications can't be read directly: payments are passed to EasyFlow through Apple's Shortcuts app. In EasyFlow, More → Monitored apps, open the iPhone guide. In short, you create an automation (for example on an Apple Pay payment or a bank text message) that opens EasyFlow with a link like <code>easyflow://pay?app=Satispay&amp;amount=5.00&amp;merchant=Bar</code>, and the transaction is logged. Available automations depend on your iOS version."}, "gd.i5.t": {"it": "Rinnovo ogni 7 giorni", "en": "Renew every 7 days"}, "gd.i5.d": {"it": "Con un Apple ID gratuito l'app scade dopo 7 giorni: riapri Sideloadly e reinstalla.", "en": "With a free Apple ID the app expires after 7 days: reopen Sideloadly and reinstall."}, "pv.h2": {"it": "Privacy, in chiaro", "en": "Privacy, plainly"}, "pv.sub": {"it": "Quello che resta sul telefono e quello che esce solo se lo scegli tu.", "en": "What stays on your phone and what leaves it only if you choose."}, "pv.dev.t": {"it": "Sul dispositivo", "en": "On your device"}, "pv.dev.d": {"it": "Movimenti e conti stanno in un database cifrato sul tuo telefono.", "en": "Transactions and accounts live in an encrypted database on your phone."}, "pv.opt.t": {"it": "Solo se scegli", "en": "Only if you choose"}, "pv.opt.d": {"it": "Backup su Drive, sincronizzazione, AI e rapporti di errore sono facoltativi.", "en": "Drive backup, sync, AI and error reports are all optional."}, "pv.rep.t": {"it": "Segnalazioni anonime", "en": "Anonymous reports"}, "pv.rep.d": {"it": "Il modello migliora di versione in versione. Se vuoi aiutarci, segnala le notifiche lette male: importi e nomi vengono nascosti prima dell'invio, e parte solo ciò che confermi tu.", "en": "The model improves with each version. If you'd like to help, report notifications that were misread: amounts and names are hidden before sending, and only what you confirm is sent."}, "pv.stats": {"it": "<b>Statistiche del sito.</b> Per sapere quante persone visitano la pagina e quali pulsanti di download vengono toccati usiamo GoatCounter, un contatore senza cookie che non salva dati personali né ti segue su altri siti. Se nel browser hai attivato “Do Not Track”, non conta nulla.", "en": "<b>Site statistics.</b> To know how many people visit this page and which download buttons are tapped we use GoatCounter, a cookie-free counter that stores no personal data and does not follow you across sites. If “Do Not Track” is on in your browser, nothing is counted."}, "pv.errors": {"it": "<b>Rapporti di errore.</b> Sono spenti finché non li attivi (nell'introduzione o in Impostazioni). Se li attivi, quando l'app si blocca invia un rapporto tecnico (versione, dispositivo, errore) al servizio Sentry, con server nell'Unione Europea. Non include i tuoi movimenti, i saldi o le password, e puoi disattivarli in qualsiasi momento.", "en": "<b>Error reports.</b> They are off until you turn them on (in the intro or in Settings). If you do, when the app crashes it sends a technical report (version, device, error) to the Sentry service, with servers in the European Union. It does not include your transactions, balances or passwords, and you can turn it off at any time."}, "ft.version": {"it": "EasyFlow", "en": "EasyFlow"}, "ft.releases": {"it": "Tutte le versioni", "en": "All versions"}, "ft.report": {"it": "Segnalazioni: segnalazioni.easyflow@gmail.com", "en": "Reports: segnalazioni.easyflow@gmail.com"}, "ft.legal": {"it": "© 2026 EasyFlow · App indipendente, non affiliata a banche, wallet o a Google. Android, Windows, Apple e Gemini sono marchi dei rispettivi proprietari.", "en": "© 2026 EasyFlow · Independent app, not affiliated with banks, wallets or Google. Android, Windows, Apple and Gemini are trademarks of their respective owners."}};
  /* Nomi dei file nelle release, usati finché (o se) l'API di GitHub non risponde: https://github.com/<repo>/releases/latest/download/<nome> */
  var ASSET_NAMES = {};
  /* Codice GoatCounter (contatore di visite senza cookie). Vuoto = nessun conteggio e nessuno script esterno. */
  var GOATCOUNTER_CODE = '';
  var root = document.documentElement;

  function store(key, value) { try { if (value === undefined) return localStorage.getItem(key); localStorage.setItem(key, value); } catch (e) { return null; } }

  /* ---------- Lingua ---------- */
  var lang = 'it';
  var q = /[?&]lang=(it|en)\b/.exec(location.search);
  var saved = store('ef-lang');
  if (q) lang = q[1];
  else if (saved === 'it' || saved === 'en') lang = saved;
  else lang = /^it\b/i.test(navigator.language || '') ? 'it' : 'en';

  function t(key) { var e = STR[key]; return e ? (e[lang] || e.it) : key; }

  function applyLang() {
    root.setAttribute('lang', lang);
    each('[data-i18n]', function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    each('[data-i18n-html]', function (el) { el.innerHTML = t(el.getAttribute('data-i18n-html')); });
    each('[data-i18n-aria]', function (el) { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'))); });
    each('[data-i18n-content]', function (el) { el.setAttribute('content', t(el.getAttribute('data-i18n-content'))); });
    var lb = document.getElementById('lang-label');
    if (lb) lb.innerHTML = (lang === 'it' ? '<b>IT</b> · EN' : 'IT · <b>EN</b>');
    renderRelease();
  }

  function each(sel, fn) { Array.prototype.forEach.call(document.querySelectorAll(sel), fn); }

  /* ---------- Tema ---------- */
  function currentTheme() {
    var set = root.getAttribute('data-theme');
    if (set === 'light' || set === 'dark') return set;
    return (window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches) ? 'light' : 'dark';
  }
  function paintTheme() {
    var th = currentTheme();
    var use = document.querySelector('#theme-btn use');
    if (use) use.setAttribute('href', th === 'dark' ? '#ic-moon' : '#ic-sun');
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', th === 'dark' ? '#0b0f19' : '#f4f8fd');
  }

  /* ---------- Guide (tab) ---------- */
  function selectTab(os, focus) {
    each('.tab', function (tab) {
      var on = tab.getAttribute('data-os') === os;
      tab.classList.toggle('on', on);
      tab.setAttribute('aria-selected', on ? 'true' : 'false');
      tab.setAttribute('tabindex', on ? '0' : '-1');
      if (on && focus) tab.focus();
    });
    each('.panel', function (p) { p.hidden = p.getAttribute('data-os') !== os; });
  }

  /* ---------- Note di rilascio: Markdown sicuro e sezioni [IT] / [EN] ---------- */
  function esc(x) { return String(x).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  function inlineMd(x) {
    x = esc(x);
    x = x.replace(/`([^`]+)`/g, '<code>$1</code>');
    x = x.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    x = x.replace(/(^|[\s(])\*([^*\s][^*]*?)\*(?=[\s).,;:!?]|$)/g, '$1<em>$2</em>');
    /* solo collegamenti http(s): niente javascript: e simili */
    x = x.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    return x;
  }

  function splitLines(text) { return String(text).replace(/\r\n?/g, '\n').split('\n'); }

  function renderMarkdown(text) {
    var out = [], list = false, para = [];
    function flushPara() { if (para.length) { out.push('<p>' + para.join('<br>') + '</p>'); para = []; } }
    function closeList() { if (list) { out.push('</ul>'); list = false; } }
    splitLines(text).forEach(function (line) {
      var h = /^\s{0,3}(#{1,6})\s+(.*?)\s*#*\s*$/.exec(line);
      var li = /^\s*[*+-]\s+(.*)$/.exec(line);
      if (h) {
        flushPara(); closeList();
        var tag = h[1].length <= 2 ? 'h4' : 'h5';
        out.push('<' + tag + '>' + inlineMd(h[2]) + '</' + tag + '>');
      } else if (li) {
        flushPara();
        if (!list) { out.push('<ul>'); list = true; }
        out.push('<li>' + inlineMd(li[1]) + '</li>');
      } else if (/^\s*$/.test(line)) {
        flushPara(); closeList();
      } else {
        closeList(); para.push(inlineMd(line.trim()));
      }
    });
    flushPara(); closeList();
    return out.join('');
  }

  /* Il testo della release può avere sezioni "[IT]" e "[EN]" su righe a sé: si mostra quella della lingua scelta */
  function notesFor(body, lng) {
    var parts = {}, cur = null, found = false;
    splitLines(body).forEach(function (line) {
      var m = /^\s*\[(IT|EN)\]\s*$/i.exec(line);
      var end = /^\s*\[\/(IT|EN)\]\s*$/i.exec(line);
      if (end) { cur = null; found = true; }
      else if (m) { cur = m[1].toLowerCase(); parts[cur] = ''; found = true; }
      else if (cur) { parts[cur] += line + '\n'; }
      else { parts._ = (parts._ || '') + line + '\n'; }
    });
    if (!found) return String(body).trim();
    return (parts[lng] || parts[lng === 'it' ? 'en' : 'it'] || parts._ || '').trim();
  }

  /* ---------- Release ---------- */
  var release = null;
  var MATCH = {
    android: function (a) { return /\.apk$/i.test(a.name); },
    /* l'installer (…-Windows-Setup.exe) prima di un eventuale ZIP */
    windows: function (a) { return /(win)/i.test(a.name) && /\.(zip|msix|exe)$/i.test(a.name); },
    mac: function (a) { return /(mac|osx|catalyst|darwin)/i.test(a.name) && /\.(zip|dmg|pkg)$/i.test(a.name); },
    ios: function (a) { return /\.ipa$/i.test(a.name); }
  };

  function pick(assets, platform) {
    var list = assets.filter(MATCH[platform]);
    if (platform === 'android') {
      var signed = list.filter(function (a) { return /signed/i.test(a.name) && !/unsigned/i.test(a.name); });
      if (signed.length) return signed[0];
    }
    if (platform === 'windows') {
      var setup = list.filter(function (a) { return /setup\.exe$/i.test(a.name); });
      if (setup.length) return setup[0];
    }
    return list[0] || null;
  }

  function shortSha(d) {
    var m = /^sha256:([0-9a-f]{64})$/i.exec(d || '');
    return m ? { short: m[1].slice(0, 10) + '…' + m[1].slice(-6), full: m[1] } : null;
  }

  function renderRelease() {
    if (!release) return;
    var assets = release.assets || [];
    var version = String(release.tag_name || '').replace(/^v/i, '');
    if (version) {
      var hv = document.getElementById('hero-version'); if (hv) hv.textContent = version;
      var fv = document.getElementById('ft-version'); if (fv) fv.textContent = version;
    }
    ['android', 'windows', 'mac', 'ios'].forEach(function (platform) {
      var card = document.querySelector('.dl-card[data-platform="' + platform + '"]');
      if (!card) return;
      var asset = pick(assets, platform);
      var link = card.querySelector('.dl-link');
      var size = card.querySelector('.size');
      var sha = card.querySelector('.sha');
      if (!asset) {
        if (platform !== 'ios') { link.removeAttribute('href'); link.setAttribute('aria-disabled', 'true'); link.classList.add('soon'); link.querySelector('span').textContent = t('dl.soon'); }
        if (size) size.textContent = '';
        return;
      }
      link.setAttribute('href', asset.browser_download_url);
      link.removeAttribute('aria-disabled'); link.classList.remove('soon');
      if (platform !== 'ios') link.querySelector('span').textContent = platform === 'android' ? t('dl.getapk') : t('dl.get');
      if (size) size.textContent = ' · ' + Math.max(1, Math.round(asset.size / 1048576)) + ' MB';
      var s = shortSha(asset.digest);
      if (s && sha && platform !== 'ios') { sha.textContent = t('dl.sha') + ': ' + s.short; sha.setAttribute('title', s.full); }
      if (platform === 'android') {
        var hero = document.getElementById('hero-android'); if (hero) hero.setAttribute('href', asset.browser_download_url);
      }
    });
    var notes = notesFor(release.body || '', lang);
    var box = document.getElementById('release-notes');
    if (box && notes) {
      document.getElementById('release-notes-body').innerHTML = renderMarkdown(notes.length > 30000 ? notes.slice(0, 30000) : notes);
      box.hidden = false;
    } else if (box) {
      box.hidden = true;
    }
  }

  function setDirectLinks() {
    Object.keys(ASSET_NAMES).forEach(function (platform) {
      var card = document.querySelector('.dl-card[data-platform="' + platform + '"] .dl-link');
      if (card) card.setAttribute('href', 'https://github.com/' + REPO + '/releases/latest/download/' + ASSET_NAMES[platform]);
    });
    var hero = document.getElementById('hero-android');
    if (hero && ASSET_NAMES.android) hero.setAttribute('href', 'https://github.com/' + REPO + '/releases/latest/download/' + ASSET_NAMES.android);
  }

  function loadRelease() {
    if (!window.fetch) return;
    fetch('https://api.github.com/repos/' + REPO + '/releases/latest', { headers: { Accept: 'application/vnd.github+json' } })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
      .then(function (rel) { release = rel; renderRelease(); })
      .catch(function () { /* resta il collegamento all'elenco delle release */ });
  }


  /* ---------- Animazioni ---------- */
  var calm = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  function setupReveal() {
    if (calm || !('IntersectionObserver' in window)) return;
    var sel = 'section > h2, section > .sub, section > .tabs, section > .note, .grid > .card, .dl > .card, .privacy > .card, .ai, .table-wrap, .steps > .step, .notes';
    var items = Array.prototype.slice.call(document.querySelectorAll(sel)).filter(function (el) {
      return el.getBoundingClientRect().top > window.innerHeight * 0.92; /* quello già visibile non si nasconde */
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
        } else {
          /* esce dal basso (si sta risalendo): torna nascosto e riapparirà alla prossima discesa;
             se esce dall'alto (già letto) resta visibile */
          var viewH = en.rootBounds ? en.rootBounds.height : window.innerHeight;
          if (en.boundingClientRect.top > viewH * 0.5) en.target.classList.remove('in');
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    items.forEach(function (el) {
      var parent = el.parentElement, idx = 0;
      if (parent) { idx = Array.prototype.indexOf.call(parent.children, el); }
      el.style.setProperty('--d', Math.min(idx % 4, 3));
      el.classList.add('reveal');
      io.observe(el);
    });
  }

  function setupProgress() {
    var bar = document.getElementById('progress');
    if (!bar || calm) return;
    var tick = false;
    function update() {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.setProperty('--p', h > 0 ? Math.min(1, window.scrollY / h).toFixed(4) : 0);
      tick = false;
    }
    window.addEventListener('scroll', function () { if (!tick) { tick = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  function setupCounter() {
    var el = document.getElementById('count-up');
    if (!el || calm) return;
    var target = parseFloat(el.getAttribute('data-value')), start = null, dur = 1300;
    function fmt(v) { return '€ ' + v.toFixed(2).replace('.', ','); }
    el.textContent = fmt(0);
    function step(ts) {
      if (start === null) start = ts + 350;
      var p = Math.max(0, Math.min(1, (ts - start) / dur));
      el.textContent = fmt(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step); else el.textContent = fmt(target);
    }
    requestAnimationFrame(step);
  }

  /* ---------- Statistiche (facoltative, senza cookie) ---------- */
  function doNotTrack() {
    return navigator.doNotTrack === '1' || window.doNotTrack === '1' || navigator.msDoNotTrack === '1';
  }

  function setupStats() {
    if (!GOATCOUNTER_CODE || doNotTrack()) return;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://gc.zgo.at/count.js';
    s.setAttribute('data-goatcounter', 'https://' + GOATCOUNTER_CODE + '.goatcounter.com/count');
    document.head.appendChild(s);
  }

  /* Un clic su un pulsante di download diventa un evento "download-<piattaforma>" (solo se il contatore è attivo) */
  function trackDownloadClicks() {
    document.addEventListener('click', function (e) {
      var link = e.target && e.target.closest ? e.target.closest('a.dl-link, #hero-android') : null;
      if (!link || link.getAttribute('aria-disabled') === 'true') return;
      var card = link.closest('.dl-card');
      var platform = card ? card.getAttribute('data-platform') : 'android';
      var name = 'download-' + platform + (link.id === 'hero-android' ? '-hero' : '');
      try {
        if (window.goatcounter && typeof window.goatcounter.count === 'function') {
          window.goatcounter.count({ path: name, title: name, event: true });
        }
      } catch (err) { /* il conteggio non deve mai impedire il download */ }
    }, true);
  }

  /* ---------- Avvio ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    applyLang();
    paintTheme();
    setDirectLinks();
    loadRelease();
    setupStats();
    trackDownloadClicks();
    setupReveal();
    setupProgress();
    setupCounter();

    document.getElementById('lang-btn').addEventListener('click', function () {
      lang = lang === 'it' ? 'en' : 'it'; store('ef-lang', lang); applyLang();
    });
    document.getElementById('theme-btn').addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next); store('ef-theme', next); paintTheme();
    });
    if (window.matchMedia) {
      matchMedia('(prefers-color-scheme: light)').addEventListener('change', function () { if (!store('ef-theme')) paintTheme(); });
    }

    var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { selectTab(tab.getAttribute('data-os')); });
      tab.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowRight') n = (i + 1) % tabs.length;
        else if (e.key === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length;
        if (n !== null) { e.preventDefault(); selectTab(tabs[n].getAttribute('data-os'), true); }
      });
    });
    each('a[href="#guida"]', function (a) {
      a.addEventListener('click', function () { var os = a.getAttribute('data-guide'); if (os) selectTab(os); });
    });
  });
})();

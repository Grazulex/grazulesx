# grazulex.be - Landing Page

Landing page professionnelle pour Jean-Marc Strauven, Expert Laravel & Open Source Creator.

## 🚀 Aperçu

Cette landing page présente :
- 17+ packages Laravel open-source avec 6,000+ téléchargements
- Services de consulting, code audits, et développement custom
- 15+ ans d'expérience Laravel/PHP
- Portfolio et expériences clés

## 🛠️ Stack Technique

- **HTML5** : Structure sémantique
- **CSS3** : Styles modernes avec variables CSS
- **JavaScript Vanilla** : Interactions et dark mode toggle
- **Aucune dépendance** : Site 100% statique, ultra-rapide

## ✨ Fonctionnalités

- ✅ Dark/Light mode avec toggle et sauvegarde de préférence
- ✅ Responsive design (mobile-first)
- ✅ Animations et micro-interactions
- ✅ SEO optimisé
- ✅ Performance optimisée (< 2 secondes de chargement)
- ✅ Accessibilité (semantic HTML, ARIA labels)
- ✅ Style developer-focused (theme sombre par défaut)

## 📁 Structure du Projet

```
grazulex/
├── index.html      # Page principale
├── styles.css      # Tous les styles (dark/light mode)
├── script.js       # Dark mode toggle & interactions
└── README.md       # Ce fichier
```

## 🎨 Personnalisation

### Modifier les couleurs

Les couleurs sont définies comme variables CSS dans `styles.css` :

```css
:root {
    --accent: #FF2D20;        /* Laravel red */
    --bg-primary: #ffffff;    /* Fond principal (light mode) */
    /* ... */
}

body.dark-mode {
    --bg-primary: #0d1117;    /* Fond principal (dark mode) */
    /* ... */
}
```

### Modifier le contenu

Tout le contenu est dans `index.html`. Les sections principales :

- **Hero** : Ligne 31
- **Packages** : Ligne 67
- **Services** : Ligne 158
- **About** : Ligne 263
- **Contact** : Ligne 326

## 🌐 Déploiement

### Option 1: Netlify (Recommandé)

1. Créez un compte sur [Netlify](https://netlify.com)
2. Glissez-déposez le dossier du projet dans Netlify Drop
3. Configurez votre domaine personnalisé (grazulex.be)

**Via Git :**
```bash
# Initialisez un repo Git
git init
git add .
git commit -m "Initial commit"

# Créez un repo sur GitHub
# Puis connectez Netlify à votre repo GitHub
```

**Configuration DNS :**
Ajoutez ces enregistrements DNS chez votre registrar :
```
A     @    75.2.60.5
CNAME www  your-site.netlify.app
```

### Option 2: Vercel

1. Installez Vercel CLI :
```bash
npm i -g vercel
```

2. Déployez :
```bash
cd grazulex
vercel
```

3. Suivez les instructions pour configurer le domaine

### Option 3: GitHub Pages

1. Créez un repo GitHub
2. Poussez le code :
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/votre-username/grazulex.git
git push -u origin main
```

3. Activez GitHub Pages dans Settings > Pages
4. Configurez le domaine personnalisé

### Option 4: Hébergement classique (FTP)

1. Téléchargez tous les fichiers via FTP dans le dossier `public_html` ou `www`
2. C'est tout ! Le site fonctionnera immédiatement

## 🧪 Test en local

Ouvrez simplement `index.html` dans votre navigateur, ou utilisez un serveur local :

**Python :**
```bash
python3 -m http.server 8000
```

**PHP :**
```bash
php -S localhost:8000
```

**Node.js (avec http-server) :**
```bash
npx http-server
```

Puis visitez : `http://localhost:8000`

## ⚡ Performance

Le site est optimisé pour :
- Temps de chargement < 2 secondes
- Aucune dépendance externe
- CSS minifié (optionnel)
- Images optimisées (si ajoutées)

### Minification (optionnel)

Pour minifier le CSS et JS en production :

```bash
# CSS
npx cleancss -o styles.min.css styles.css

# JS
npx terser script.js -o script.min.js

# Puis mettez à jour les références dans index.html
```

## 📊 Analytics (optionnel)

Pour ajouter Google Analytics, ajoutez avant `</head>` dans `index.html` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔧 Maintenance

### Mettre à jour les stats des packages

Éditez `index.html` et mettez à jour les nombres :
- Ligne 45-60 : Stats dans le Hero
- Ligne 79, 101, 123 : Stats des packages

### Ajouter un nouveau package

Copiez un bloc `.package-card` existant et modifiez le contenu.

## 🎯 SEO

Le site inclut :
- Meta tags (description, keywords, author)
- Open Graph tags (partage sur réseaux sociaux)
- Structure sémantique HTML5
- URLs propres avec ancres

### Améliorer le SEO

1. Ajoutez un fichier `sitemap.xml`
2. Ajoutez un fichier `robots.txt`
3. Inscrivez le site sur Google Search Console
4. Obtenez des backlinks depuis vos packages GitHub

## 🐛 Problèmes connus

Aucun pour le moment !

## 📝 License

© 2025 Jean-Marc Strauven. Tous droits réservés.

## 🤝 Support

Pour toute question :
- Email : jms@grazulex.be
- GitHub : [@Grazulex](https://github.com/Grazulex)
- LinkedIn : [jean-marcstrauven](https://linkedin.com/in/jean-marcstrauven)

---

**Built with ❤️ by Claude Code**

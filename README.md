# 📚 GUIDE D'UTILISATION LXPHOTO

## 🚀 LANCEMENT DU SITE

1. **Serveur local** (recommandé) :
   ```bash
   python -m http.server 8000
   ```
   Puis ouvrez : http://localhost:8000

2. **Ou directement** :
   Double-cliquez sur `home.html` dans l'explorateur

## 🔐 ACCÈS À L'ADMINISTRATION

1. Allez sur : `http://localhost:8000/admin.html`
2. Mot de passe par défaut : `LXPhoto2025`
3. ⚠️ **CHANGEZ ce mot de passe après première connexion !**

## 📝 MODIFICATIONS COURANTES

### Modifier les textes
- **Fichier** : `home.html`
- **Ligne** : 35 environ
- **Recherchez** : `<h1>Capturer l'Essence</h1>`
- **Modifiez** le texte entre les balises

### Changer les images
1. Ajoutez vos images dans `/asset/image/`
2. Nommez-les : `1.jpg`, `2.jpg`, etc.
3. Dans le HTML, remplacez les URLs Unsplash par :
   ```html
   <img src="../asset/image/1.jpg" alt="...">
   ```

### Modifier les tarifs
- **Recherchez** : `150€` dans les fichiers
- **Remplacez** par votre tarif

## 🛠️ STRUCTURE DES FICHIERS

```
/ (racine du site)
├── home.html              # Page d'accueil
├── booking.html           # Page réservation générale
├── workshops.html         # Page formations
├── admin.html             # Page de connexion admin
├── admin-panel.html       # Panneau d'administration
├── asset/
│   ├── css/
│   │   ├── home.css       # Styles page d'accueil
│   │   └── custom-alert.css # Styles alerte personnalisée
│   ├── js/
│   │   └── image-protection.js # Protection des images
│   └── image/             # Vos images (à créer)
└── booking/
    ├── booking_portrait.html
    ├── booking_business.html
    └── booking_sensuel.html
```

## 🎨 PERSONNALISATION

### Couleurs principales
Dans tous les fichiers CSS, cherchez `:root` :
```css
:root {
    --bleu-nuit: #2d2d2d;  /* Couleur secondaire */
    --blanc: #FFFFFF;       /* Texte */
    --dore: #C49B3A;       /* Couleur principale */
    --gris-clair: #F5F5F5;  /* Fond alternatif */
}
```

### Protection des images
- **Activée** : Les scripts sont inclus dans toutes les pages
- **Désactiver** : Supprimez ces lignes dans le HTML :
  ```html
  <script src="./asset/js/image-protection.js"></script>
  ```

## 🚨 IMPORTANT

1. **Sauvegardez toujours** avant de modifier
2. **Testez** après chaque changement
3. **Mot de passe admin** : Changez-le dans `admin.html` ligne 72
4. **Images** : Optimisez-les (800x600px recommandé)
5. **Responsive** : Le site s'adapte automatiquement aux mobiles

## 📞 SUPPORT

- Fichiers de sauvegarde : Conservez une copie
- Modifications sensibles : Header, footer, navigation
- Nouvelles pages : Dupliquez une page existante

---

**Bonne utilisation de votre site LXPhoto ! 🎨📸**

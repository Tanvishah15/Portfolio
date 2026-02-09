# Tanvi Shah - Professional Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## 👀 Website Ko Locally Kaise Dekhein (How to View Locally)

### Method 1: Direct Browser Se (Easiest)
1. Portfolio folder mein jao
2. `index.html` file par **double-click** karo
3. Website automatically browser mein khul jayegi!

### Method 2: VS Code Live Server (Recommended)
1. VS Code install karo (agar nahi hai)
2. Portfolio folder ko VS Code mein open karo
3. `index.html` par **right-click** karo
4. **"Open with Live Server"** select karo
5. Website automatically `http://localhost:5500` par khul jayegi

**Note:** Agar image nahi dikh rahi, toh check karo ki `image.jpeg` file same folder mein hai.

## 🚀 GitHub Pages Se Deploy Kaise Karein (Step-by-Step Guide)

### Step 1: GitHub Account Banana
1. [github.com](https://github.com) par jao
2. **Sign up** karo (agar account nahi hai)
3. Account verify karo

### Step 2: Repository Banana
1. GitHub par login karo
2. Top right corner mein **"+"** button par click karo
3. **"New repository"** select karo
4. Repository ka naam do: `portfolio` (ya koi bhi naam)
5. **Public** select karo (GitHub Pages ke liye public chahiye)
6. **"Create repository"** button par click karo

### Step 3: Files Upload Karna
**Option A: GitHub Website Se (Easiest)**
1. Apni repository page par jao
2. **"uploading an existing file"** link par click karo
3. Apne portfolio folder se sab files select karo:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `image.jpeg`
   - `README.md` (optional)
4. **"Commit changes"** button par click karo

**Option B: GitHub Desktop Se (Agar install hai)**
1. GitHub Desktop open karo
2. **File → Add Local Repository** select karo
3. Apna portfolio folder select karo
4. **"Publish repository"** button par click karo

### Step 4: GitHub Pages Enable Karna
1. Apni repository page par jao
2. Top menu se **"Settings"** par click karo
3. Left sidebar se **"Pages"** par click karo
4. **"Source"** section mein:
   - **Branch:** `main` select karo
   - **Folder:** `/ (root)` select karo
5. **"Save"** button par click karo

### Step 5: Website Live Ho Gaya! 🎉
1. Kuch seconds wait karo (1-2 minutes)
2. GitHub Pages section mein apna website URL dikhega:
   - Format: `https://yourusername.github.io/portfolio`
3. Is URL par click karke apna website dekh sakte ho!

### Step 6: Changes Update Karna (Baad Mein)
Jab bhi website mein changes karo:
1. Files edit karo (index.html, styles.css, etc.)
2. GitHub repository mein jao
3. **"uploading an existing file"** se updated files upload karo
4. **"Commit changes"** karo
5. 1-2 minutes mein changes live ho jayenge!

## 🌐 Custom Domain Add Karna (Optional)

Agar apna domain chahiye (jaise `tanvishah.com`):

### Step 1: Domain Kharidna
1. Domain provider se domain kharido:
   - [Namecheap](https://www.namecheap.com)
   - [GoDaddy](https://www.godaddy.com)
   - [Google Domains](https://domains.google)

### Step 2: GitHub Repository Mein Domain Add Karna
1. GitHub repository mein jao
2. **Settings → Pages** par jao
3. **"Custom domain"** section mein apna domain enter karo (e.g., `tanvishah.com`)
4. **"Save"** karo

### Step 3: CNAME File Banana
1. Repository mein **"Add file → Create new file"** par click karo
2. File ka naam do: `CNAME` (sirf CNAME, koi extension nahi)
3. File mein sirf apna domain name likho:
   ```
   tanvishah.com
   ```
4. **"Commit new file"** karo

### Step 4: DNS Settings Update Karna
Apne domain provider ke dashboard mein jao aur yeh add karo:

**CNAME Record:**
- **Type:** CNAME
- **Name:** `@` ya `www`
- **Value:** `yourusername.github.io`
- **TTL:** 3600

**Note:** DNS changes ko activate hone mein 24-48 hours lag sakte hain.

## ✏️ Website Edit Kaise Karein

### Text Content Change Karna:
1. `index.html` file open karo (kisi bhi text editor mein)
2. Jo bhi text change karna hai, woh dhoondo
3. Edit karo aur save karo
4. GitHub par upload karo (Step 6 dekh lo)

### Colors Change Karna:
1. `styles.css` file open karo
2. Top mein `:root` section dhoondo
3. Colors change karo:
   ```css
   --primary-color: #1e3a8a; /* Apna color code daalo */
   ```
4. Save karo aur GitHub par upload karo

### Projects Add Karna:
1. `index.html` mein "Projects & Case Studies" section dhoondo
2. Placeholder project cards mein apna content add karo
3. Save karo aur GitHub par upload karo

## 🎨 Features

- ✅ Fully Responsive (Mobile, Tablet, Desktop)
- ✅ Smooth Scrolling Navigation
- ✅ Modern Professional Design
- ✅ Easy to Edit
- ✅ Fast Loading
- ✅ SEO Friendly
- ✅ Custom Domain Support

## 📱 Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## 🔧 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive features
├── image.jpeg          # Profile photo ✅
└── README.md           # This file
```

## 💡 Tips

1. **Keep it Updated**: Regularly update your projects and experience
2. **Test Before Upload**: Locally check karo pehle, phir GitHub par upload karo
3. **Professional Photo**: Apna professional photo add karo
4. **Mobile Check**: Mobile par bhi test karo ki sab theek dikh raha hai
5. **Backup**: Important changes se pehle files ka backup le lo

## 🆘 Help Chahiye?

- **GitHub Pages Issues**: [GitHub Pages Documentation](https://docs.github.com/en/pages)
- **Domain Setup Help**: Apne domain provider ki support se contact karo
- **General Questions**: GitHub Community Forum check karo

## 📝 License

Free to use and modify for personal portfolio.

---

**Made with ❤️ for Tanvi Shah's Professional Portfolio**

# GitHub पर Code Push करने के लिए Commands

## ✅ पहले से Complete:
- ✅ Git install हो गया है
- ✅ Git configure हो गया है (name: Tanvi Shah, email: tjshah45@gmail.com)
- ✅ Repository initialize हो गया है
- ✅ First commit हो गया है

## अब बस ये करना है:

### Step 1: GitHub पर Repository बनाएं
1. https://github.com पर जाएं और login करें
2. Right side पर **"+"** icon → **"New repository"** click करें
3. Repository name: `Portfolio` (या कोई भी नाम)
4. Description: "My Portfolio Website"
5. Public या Private select करें
6. ⚠️ **"Initialize this repository with a README" को UNCHECK करें** (क्योंकि आपके पास already code है)
7. **"Create repository"** पर click करें

### Step 2: GitHub से Connect करें

GitHub पर repository बनाने के बाद, वहां instructions दिखेंगे। PowerShell में ये commands run करें:

```powershell
# PowerShell को Portfolio folder में open करें
cd "c:\Users\Tanvi Shah\OneDrive\Desktop\Portfolio\Portfolio"

# Git PATH add करें (अगर git command नहीं चल रहा)
$env:Path += ";C:\Program Files\Git\cmd"

# Remote repository add करें (YOUR_USERNAME को अपने GitHub username से replace करें)
git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git

# Main branch को set करें
git branch -M main

# Code को GitHub पर push करें
git push -u origin main
```

### Step 3: Authentication

जब `git push` command run करेंगे, तो GitHub login करने के लिए prompt आएगा:
- Username: अपना GitHub username
- Password: **Personal Access Token** (normal password नहीं!)

#### Personal Access Token कैसे बनाएं:
1. GitHub → **Settings** (top right corner)
2. Left sidebar में **Developer settings**
3. **Personal access tokens** → **Tokens (classic)**
4. **Generate new token** → **Generate new token (classic)**
5. Note: "Portfolio Push" (या कोई भी नाम)
6. Expiration: आप choose कर सकते हैं
7. **Scopes** में **repo** को check करें
8. **Generate token** पर click करें
9. **Token को copy करें** (यह दोबारा नहीं दिखेगा!)
10. इस token को password की तरह use करें

---

## Future Updates के लिए:

जब भी आप changes करें, ये commands use करें:

```powershell
# Git PATH add करें (अगर नया PowerShell window है)
$env:Path += ";C:\Program Files\Git\cmd"

# Portfolio folder में जाएं
cd "c:\Users\Tanvi Shah\OneDrive\Desktop\Portfolio\Portfolio"

# Changes देखें
git status

# Files add करें
git add .

# Commit करें
git commit -m "Description of changes"

# GitHub पर push करें
git push
```

---

**Note:** PowerShell को restart करने के बाद Git automatically available होगा। अभी के लिए हर बार `$env:Path += ";C:\Program Files\Git\cmd"` command run करना होगा।

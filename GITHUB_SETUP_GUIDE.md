# GitHub Setup Guide (हिंदी में)

## Step 1: Git Install करें

### Option A: Git for Windows Download करें
1. Browser में जाएं: https://git-scm.com/download/win
2. Download button पर click करें (automatically latest version download होगी)
3. Downloaded file को run करें
4. Installation के दौरान default options select करें (Next, Next करते जाएं)
5. Install complete होने के बाद PowerShell को restart करें

### Option B: Winget से Install करें (अगर available है)
PowerShell में यह command run करें:
```powershell
winget install --id Git.Git -e --source winget
```

## Step 2: Git Configure करें

Installation के बाद, PowerShell में ये commands run करें:

```powershell
# अपना नाम और email set करें
git config --global user.name "Tanvi Shah"
git config --global user.email "tjshah45@gmail.com"

# Verify करें
git config --global --list
```

## Step 3: GitHub Account बनाएं (अगर नहीं है)

1. https://github.com पर जाएं
2. "Sign up" पर click करें
3. Account बनाएं (email: tjshah45@gmail.com use कर सकते हैं)

## Step 4: Repository Initialize करें

Portfolio folder में:

```powershell
# Git repository initialize करें
git init

# सभी files को add करें
git add .

# First commit करें
git commit -m "Initial commit: Portfolio website"
```

## Step 5: GitHub पर Repository बनाएं

1. GitHub.com पर login करें
2. Right side पर "+" icon पर click करें → "New repository"
3. Repository name: `Portfolio` (या कोई भी नाम)
4. Description: "My Portfolio Website"
5. Public या Private select करें
6. **"Initialize this repository with a README" को UNCHECK करें** (क्योंकि आपके पास already code है)
7. "Create repository" पर click करें

## Step 6: Local Repository को GitHub से Connect करें

GitHub पर repository बनाने के बाद, वहां instructions दिखेंगे। आपको ये commands run करने होंगे:

```powershell
# Remote repository add करें (YOUR_USERNAME को अपने GitHub username से replace करें)
git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git

# Main branch को set करें
git branch -M main

# Code को GitHub पर push करें
git push -u origin main
```

## Step 7: Future Updates के लिए

जब भी आप changes करें, ये commands use करें:

```powershell
# Changes देखें
git status

# Files add करें
git add .

# Commit करें
git commit -m "Description of changes"

# GitHub पर push करें
git push
```

## Troubleshooting

### अगर Git install नहीं हो रहा:
- Windows को restart करें
- Administrator rights के साथ PowerShell run करें

### अगर GitHub authentication error आए:
- Personal Access Token use करना होगा
- GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
- Generate new token → repo permissions select करें
- Token को password की तरह use करें

---

**Note:** Git install करने के बाद PowerShell को restart करना जरूरी है!

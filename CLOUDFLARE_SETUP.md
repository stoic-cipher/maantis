# Cloudflare Configuration for maantis.com

## Critical Settings to Fix Google Search Console Issues

### 1. Force HTTPS Redirect
**Location:** SSL/TLS → Edge Certificates

- ✅ **Always Use HTTPS**: ON
  - Automatically redirects all HTTP requests to HTTPS
  - Fixes: `http://maantis.com/` → `https://maantis.com/`

### 2. Redirect www to non-www
**Option A: Using Page Rules (Recommended)**

**Location:** Rules → Page Rules

Create a new Page Rule:
- **URL Pattern:** `www.maantis.com/*`
- **Setting:** Forwarding URL
- **Status Code:** 301 - Permanent Redirect
- **Destination URL:** `https://maantis.com/$1`

**Option B: Using Redirect Rules (Newer method)**

**Location:** Rules → Redirect Rules

Create a new Redirect Rule:
- **Rule name:** "Redirect www to non-www"
- **When incoming requests match:**
  - Field: Hostname
  - Operator: equals
  - Value: `www.maantis.com`
- **Then:**
  - Type: Dynamic
  - Expression: `concat("https://maantis.com", http.request.uri.path)`
  - Status code: 301

### 3. DNS Configuration
**Location:** DNS → Records

Ensure you have:
- ✅ **A record:** `maantis.com` → Your server IP (Proxied: ON)
- ✅ **CNAME record:** `www` → `maantis.com` (Proxied: ON)

### 4. SSL/TLS Settings
**Location:** SSL/TLS → Overview

- ✅ **SSL/TLS encryption mode:** Full (strict)
- ✅ **Minimum TLS Version:** TLS 1.2 or higher

### 5. Enable HSTS (Optional but Recommended)
**Location:** SSL/TLS → Edge Certificates

- **HTTP Strict Transport Security (HSTS)**
  - Enable HSTS: ON
  - Max Age Header: 6 months (15768000 seconds)
  - Apply HSTS policy to subdomains: ON
  - Preload: ON (optional, requires submission to HSTS preload list)

## Verification

After configuring, test these URLs:
1. `http://maantis.com/` → Should redirect to `https://maantis.com/`
2. `https://www.maantis.com/` → Should redirect to `https://maantis.com/`
3. `http://www.maantis.com/` → Should redirect to `https://maantis.com/`
4. `https://maantis.com/services` → Should redirect to `https://maantis.com/services/`

## Expected Google Search Console Results

Once configured and Google re-crawls:
- ✅ All HTTP URLs will redirect to HTTPS
- ✅ All www URLs will redirect to non-www
- ✅ All non-trailing-slash URLs will redirect to trailing-slash versions
- ✅ 0 pages with redirect issues
- ✅ 0 4xx errors
- ✅ All 11 pages indexed

## Priority Order
1. **HTTPS Redirect** (Highest priority - fixes security warnings)
2. **www Redirect** (Fixes duplicate content and 4xx errors)
3. **Trailing Slash** (Already configured in Astro + _redirects file)

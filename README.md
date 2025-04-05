# Company Email Format Viewer

A simple web application to view email formats for different companies. This helps in understanding how email addresses are formatted at various companies.

## Features
- Search companies by name
- View email format patterns
- Dark mode UI for better readability
- No framework dependencies - pure HTML, CSS, and JavaScript

## Project Structure
```
.
├── index.html          # Main HTML file
├── styles.css         # Styles for the application
├── emailFormats.js    # Company email format data
├── app.js            # Application logic
└── README.md         # Project documentation
```

## Adding New Company Email Formats

To add a new company's email format:

1. Fork this repository
2. Create a new branch: `add-company-name`
3. Add the company's email format to `emailFormats.js`:
   ```javascript
   const EMAIL_FORMATS = {
       // ... existing formats ...
       'Company Name': '<format>@domain.com'
   };
   ```
   
   Example formats:
   ```javascript
   'Juspay': '<firstname>.<lastname>@juspay.in'
   'New Relic': '<firstcharacteroffirstname>.<lastname>@newrelic.com'
   ```

4. Create a Pull Request with the following information:
   - Title: `Add [Company Name] email format`
   - Description: 
     - Company name
     - Email format pattern
     - (Optional) Source or reference for the format

### Format Placeholders
Use these placeholders in your email format:
- `<firstname>` - Full first name
- `<lastname>` - Full last name
- `<firstcharacteroffirstname>` - First character of the first name

### Example PR Process
```bash
# Fork and clone the repository
git clone https://github.com/yourusername/email.git
cd email

# Create a new branch
git checkout -b add-google

# Edit emailFormats.js to add the new format
# Commit and push your changes
git add emailFormats.js
git commit -m "Add Google email format"
git push origin add-google
```

Then create a Pull Request on GitHub with your changes.

## Development

Simply serve the files using any HTTP server. For example:

```bash
# Using Python
python -m http.server 3000

# Using Node.js's http-server
npx http-server

# Using PHP
php -S localhost:3000
```

Then open `http://localhost:3000` in your browser.

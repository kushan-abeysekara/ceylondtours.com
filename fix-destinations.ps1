# PowerShell script to fix all destination pages that use wrong CSS classes
# This script will convert them to match Sigiriya.tsx structure

$files = @(
    'UdawalaweNationalPark',
    'Kalpitiya',
    'Jaffna',
    'KnucklesMountainRange',
    'Kitulgala',
    'Pasikuda',
    'Negombo',
    'Mahiyanganaya',
    'RavanaFalls',
    'PidurangalaRock',
    'SinharajaForest',
    'WilpattuNationalPark',
    'Batticaloa',
    'Badulla',
    'Hatton',
    'Matara',
    'Hambantota',
    'Kataragama',
    'Colombo'
)

foreach ($file in $files) {
    $filePath = "src\pages\Places\$file.tsx"
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw
        
        # Replace function declaration
        $content = $content -replace 'function\s+\w+\s*\(\s*\)\s*\{', "const $file`: React.FC = () => {"
        $content = $content -replace '}\s*export\s+default', "};\n\nexport default"
        
        # Replace main wrapper class
        $content = $content -replace 'dest-detail-page', 'destination-page'
        
        # Replace hero section structure
        $content = $content -replace '<section className="dest-hero">\s*<div className="dest-hero-overlay">.*?</div>\s*</section>', @"
<section className="dest-hero">
        <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600" alt="$file" />
        <div className="dest-badge">$file</div>
      </section>
"@
        
        # Replace content section structure
        $content = $content -replace 'dest-content-grid', 'dest-main-section'
        $content = $content -replace 'dest-content-left', 'dest-left'
        $content = $content -replace 'dest-content-right', 'dest-right'
        $content = $content -replace 'dest-section-title', 'dest-title'
        $content = $content -replace 'dest-main-image', ''
        
        # Remove dest-info-cards section
        $content = $content -replace '<div className="dest-info-cards">.*?</div>\s*</div>', '</div>'
        
        # Fix features structure
        $content = $content -replace '<div className="dest-feature-item">.*?<span className="dest-feature-icon">✓</span>.*?<span className="dest-feature-text">(.*?)</span>.*?</div>', @'
<li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  $1
                </li>
'@
        
        # Fix bottom section
        $content = $content -replace 'dest-bottom-image', ''
        
        # Remove CTA section
        $content = $content -replace '<section className="dest-cta-section">.*?</section>', ''
        
        Set-Content -Path $filePath -Value $content -NoNewline
        Write-Host "Fixed: $filePath" -ForegroundColor Green
    }
}

Write-Host "`nAll files have been updated!" -ForegroundColor Cyan
